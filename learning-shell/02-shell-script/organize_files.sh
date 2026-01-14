#!/bin/bash

# 文件整理脚本 - 查找epub和pdf文件并整理到指定目录
# 使用方法: ./organize_files.sh <源目录> <目标目录>

# 检查参数数量
if [ $# -ne 2 ]; then
    echo "用法: $0 <源目录> <目标目录>"
    echo "示例: $0 /path/to/source /path/to/destination"
    exit 1
fi

SOURCE_DIR="$1"
TARGET_DIR="$2"

# 检查源目录是否存在
if [ ! -d "$SOURCE_DIR" ]; then
    echo "错误: 源目录 '$SOURCE_DIR' 不存在"
    exit 1
fi

# 创建目标目录（如果不存在）
if [ ! -d "$TARGET_DIR" ]; then
    echo "创建目标目录: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
fi

# 用于存储需要删除的目录
declare -a dirs_to_delete

echo "开始处理文件..."
echo "源目录: $SOURCE_DIR"
echo "目标目录: $TARGET_DIR"
echo "----------------------------------------"

# 查找所有epub和pdf文件
find "$SOURCE_DIR" -type f \( -name "*.epub" -o -name "*.pdf" \) -print0 | while IFS= read -r -d '' file; do
    # 获取文件名
    filename=$(basename "$file")
    
    # 获取文件所在的目录
    file_dir=$(dirname "$file")
    
    echo "找到文件: $filename"
    echo "位置: $file_dir"
    
    # 复制文件到目标目录
    if cp "$file" "$TARGET_DIR/"; then
        echo "✓ 已复制: $filename"
        
        # 将目录添加到待删除列表（避免重复）
        echo "$file_dir" >> /tmp/dirs_to_delete_$$
    else
        echo "✗ 复制失败: $filename"
    fi
    
    echo "----------------------------------------"
done

# 处理目录删除
if [ -f /tmp/dirs_to_delete_$$ ]; then
    echo "开始删除空目录和包含已处理文件的目录..."
    
    # 去重并排序（从深层到浅层，确保先删除子目录）
    sort -u /tmp/dirs_to_delete_$$ | sort -r > /tmp/unique_dirs_$$
    
    while IFS= read -r dir; do
        if [ -d "$dir" ] && [ "$dir" != "$SOURCE_DIR" ]; then
            # 检查目录是否为空或只包含已处理的文件类型
            remaining_files=$(find "$dir" -type f ! -name "*.epub" ! -name "*.pdf" | wc -l)
            epub_pdf_files=$(find "$dir" -type f \( -name "*.epub" -o -name "*.pdf" \) | wc -l)
            
            if [ "$remaining_files" -eq 0 ]; then
                if [ "$epub_pdf_files" -eq 0 ]; then
                    echo "删除空目录: $dir"
                    rmdir "$dir" 2>/dev/null
                else
                    echo "删除目录（包含已处理的文件）: $dir"
                    rm -rf "$dir"
                fi
            else
                echo "保留目录（包含其他文件）: $dir"
            fi
        fi
    done < /tmp/unique_dirs_$$
    
    # 清理临时文件
    rm -f /tmp/dirs_to_delete_$$ /tmp/unique_dirs_$$
fi

echo "----------------------------------------"
echo "处理完成！"

# 统计结果
epub_count=$(find "$TARGET_DIR" -name "*.epub" | wc -l)
pdf_count=$(find "$TARGET_DIR" -name "*.pdf" | wc -l)
total_count=$((epub_count + pdf_count))

echo "统计结果:"
echo "- EPUB文件: $epub_count 个"
echo "- PDF文件: $pdf_count 个"
echo "- 总计: $total_count 个文件已复制到 $TARGET_DIR"
