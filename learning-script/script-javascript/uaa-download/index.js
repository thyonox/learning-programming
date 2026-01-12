import { load } from "cheerio";
import puppeteer from "puppeteer";

async function downloadUaaContent(id) {
    // 拼接网址
    const url = 'https://www.uaa.com/novel/intro?id=' + id;

    // 创建浏览器实例
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // 创建新页面
    const page = await browser.newPage();

    // 设置浏览器身份信息（模拟真实用户）
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36');
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'zh-CN,zh;q=0.9'
    });

    // 打开网页
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
    });

    // 获取 HTML 内容
    const html = await page.content();

    // 抓取章节列表
    await page.evaluate(() => {
        const data = document.querySelectorAll('.catalog_ul li');
        // 没有找到章节列表
        if(data.length === 0){
            console.error('没有找到章节列表');
            return;
        }
        // 有分卷
        if(data.length > 1){
            data.forEach((item, index) => {
                const title = item.querySelector(':scope > span').textContent.trim();
                console.log(`分卷 ${index + 1}: ${title}`);
            });
        }
        // 没有分卷
    })

    await browser.close();
}

downloadUaaContent('1005924087396175872')
    .then(() => {
        console.log('下载完成');
    })
    .catch(err => {
        console.error('下载失败:', err);
    });