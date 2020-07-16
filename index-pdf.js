const puppeteer = require('puppeteer');

void (async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://spiced.academy');
        await page.screenshot({
            path: './screenshots/page1.png'
        });
        await page.pdf({
            path: './pdfs/page1.pdf'
        });
        await browser.close();
    } catch (err) {
        console.log('err in pdf reader: ', err);
    }
})();