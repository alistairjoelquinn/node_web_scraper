const puppeteer = require('puppeteer');

void (async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://spiced.academy')
    } catch (err) {
        console.log('err in scraper: ', err);
    }
})();