#!/usr/bin/env bash

# 脚本作用: 查找源目录下的epub和pdf文件，复制到目标目录
# 脚本示例: ./files.sh <源目录> <目标目录>

# 检查参数个数
if [ $# -ne 2 ]; then
    echo "用法：$0 <源目录> <目标目录>"
    echo "示例：$0 /path/to/source /path/to/target"
    exit 1
fi

# 获取参数
SOURCE_DIR="$1"
TARGET_DIR="$2"

# 检查源目录是否存在
if [ ! -d "$SOURCE_DIR" ]; then
    echo "源目录: '$SOURCE_DIR' 不存在"
    echo "退出程序"
fi

# 检查目标目录是否存在
if [ ! -d "$TARGET_DIR" ]; then
    echo "目标目录: '$TARGET_DIR' 不存在"
    echo "创建目标目录"
    mkdir -p "$TARGET_DIR"
fi

echo "开始处理文件..."
echo "源目录: '$SOURCE_DIR'"
echo "目标目录: '$TARGET_DIR'"
echo "----------------------------------"

# 查找源目录中所有epub和pdf格式文件，复制到目标目录
find "$SOURCE_DIR" -type f -a \( -name "*.epub" -o -name "*.pdf" \) -print0 | while IFS= read -r -d '' file; do
    #获取文件名
    file_name=$(basename "$file")
    # 获取文件位置
    file_dir=$(dirname "$file")

    echo "找到文件: '$file_name'"
    echo "找到位置: '$file_dir'"

    #复制文件到目标位置
    if cp "$file" "$TARGET_DIR"; then
        echo "✓ 已复制: '$file_name'"
    else
        echo "✕ 复制失败: '$file_name'"
    fi

    echo "----------------------------------"
done

echo "处理完成！"
echo "----------------------------------"

# 统计内容
epub_count=$(find "$TARGET_DIR" -name "*.epub" | wc -l)
pdf_count=$(find "$TARGET_DIR" -name "*.pdf" | wc -l)
total_count=$((epub_count + pdf_count))

echo "统计结果:"
echo "- EPUB文件: $epub_count 个"
echo "- PDF文件: $pdf_count 个"
echo "- 总计: $total_count 个已复制到 '$TARGET_DIR'"

