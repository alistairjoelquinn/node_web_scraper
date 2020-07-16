const puppeteer = require('puppeteer');
const fs = require('fs');

void (async () => {
    try {
        for(let i = 0; i < 50; i++) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://www.twitterbiogenerator.com/');
            const bioText = await page.evaluate(() => {
                const data = document.querySelector('textarea#bio').value;
                return data;
            });
            fs.appendFileSync('./json/bios.json', [JSON.stringify({text: bioText}), '\n'].join(','));
        }
    } catch (err) {
        console.log('err scraping element content: ', err);
    }
})();