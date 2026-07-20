import { chromium, firefox, test, webkit, type Browser, type Page } from '@playwright/test'

test('title test', async ({ page }) => {
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log(title);

    let url = await page.url();
    console.log(url);
    // await page.pause();
    await page.waitForTimeout(5000);
})

test.skip('multiple browser test', async () => {
    let browser: Browser = await chromium.launch({ headless: false }); // Chrome for Testing (CFT)
    // let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' }); // Chrome
    // let browser: Browser = await chromium.launch({ headless: false, channel: 'msegdge' }); // MS Edge
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Opera.app/Contents/MacOS/Opera' }); // Opera
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' }); // Brave

    // let browser: Browser = await firefox.launch({ headless: false }); // Firefox Nightly build
    // let browser: Browser = await webkit.launch({ headless: false }); // Safari Webkit


    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log(title);

    let url = await page.url();
    console.log(url);

})





