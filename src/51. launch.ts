// import { chromium, type Browser, type Page } from "@playwright/test";

import { chromium, firefox, webkit, type Browser, type Page } from "@playwright/test";

// (async () => {
//     let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
//     let page: Page = await browser.newPage();
//     await page.goto('https://www.google.com');
//     browser.close();
// })();




type BrowserName = 'chrome' | 'edge' | 'firefox' | 'safari';

async function launchBrowser(browserName: BrowserName) {

    console.log('Browser Name:', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            return await chromium.launch({ headless: false, channel: 'chrome' });
        case 'edge':
            return await chromium.launch({ headless: false, channel: 'msedge' });
        case 'firefox':
            return await firefox.launch({ headless: false, channel: 'firefox' });
        case 'safari':
            return await webkit.launch({ headless: false, channel: 'webkit' });
        default:
            console.log('Invalid Browser', browserName);
            throw new Error(`Invalid Browser: ${browserName}`);
    }
    
}


let browser: Browser = await launchBrowser('chrome');
let page: Page = await browser.newPage();
await page.goto('https://www.google.com');
await browser.close();