const fs = require('fs');
const path = require('path');

// 提取content内容的函数
function extractContentFromJson(jsonFilePath, outputFilePath) {
    try {
        // 读取JSON文件
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        const data = JSON.parse(jsonData);
        
        // 检查数据结构是否正确
        if (!data.results || !data.results.items || !Array.isArray(data.results.items)) {
            throw new Error('JSON文件结构不正确，缺少results.items数组');
        }
        
        // 提取所有content内容
        const contentArray = [];
        
        data.results.items.forEach((item, itemIndex) => {
            if (item.alternatives && Array.isArray(item.alternatives)) {
                item.alternatives.forEach((alternative, altIndex) => {
                    if (alternative.content) {
                        contentArray.push(alternative.content);
                    }
                });
            }
        });
        
        // 将content内容拼接成字符串
        const finalContent = contentArray.join(' ');
        
        // 写入到txt文件
        fs.writeFileSync(outputFilePath, finalContent, 'utf8');
        
        console.log(`成功提取了 ${contentArray.length} 个content项`);
        console.log(`内容已保存到: ${outputFilePath}`);
        console.log(`预览内容: ${finalContent.substring(0, 100)}${finalContent.length > 100 ? '...' : ''}`);
        
        return finalContent;
        
    } catch (error) {
        console.error('处理文件时出错:', error.message);
        return null;
    }
}

// 批量处理多个JSON文件的函数
function processMultipleFiles(inputDir, outputDir) {
    try {
        // 确保输出目录存在
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // 读取输入目录中的所有JSON文件
        const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.json'));
        
        if (files.length === 0) {
            console.log('在指定目录中没有找到JSON文件');
            return;
        }
        
        files.forEach(file => {
            const inputPath = path.join(inputDir, file);
            const outputFileName = file.replace('.json', '.txt');
            const outputPath = path.join(outputDir, outputFileName);
            
            console.log(`\n处理文件: ${file}`);
            extractContentFromJson(inputPath, outputPath);
        });
        
        console.log(`\n批量处理完成！共处理了 ${files.length} 个文件`);
        
    } catch (error) {
        console.error('批量处理时出错:', error.message);
    }
}

// 使用示例
function main() {
    // 单文件处理示例
    const inputFile = './input.json';  // 输入JSON文件路径
    const outputFile = './output.txt'; // 输出txt文件路径
    
    console.log('=== 单文件处理 ===');
    extractContentFromJson(inputFile, outputFile);
    
    // 批量处理示例（可选）
    // console.log('\n=== 批量处理 ===');
    // processMultipleFiles('./input_folder', './output_folder');
}

// 导出函数供其他模块使用
module.exports = {
    extractContentFromJson,
    processMultipleFiles
};

// 如果直接运行此脚本，则执行main函数
if (require.main === module) {
    main();
}