import { test, expect, Locator, Page } from "@playwright/test";


test('multi window test', async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let links: Locator[] = [
        page.getByRole('link', { name: 'About Us' }),
        page.getByRole('link', { name: 'Become a Partner' }),
        page.getByRole('link', { name: 'Contact Us' })
    ]

    let childWindows: Page[] = []; 
    
    for (let link of links) {
        let [childWindow] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ])
        await childWindow.waitForLoadState();

        childWindows.push(childWindow);
    }

    console.log('Total count of pages:', context.pages().length);

    for (let window of childWindows) {
        await window.bringToFront();
        await page.waitForTimeout(400);
        console.log('child window title', await window.title());
        await window.close();
    }

    await page.bringToFront();
    console.log('parent window title', await page.title());
    console.log('Total count of pages:', context.pages().length);

    await page.waitForTimeout(1000);
});
