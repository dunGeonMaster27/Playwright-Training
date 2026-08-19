import test, { expect } from "@playwright/test";

test('multi window test', async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let [aboutUsPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'About Us' }).click()
    ]);

    let [becomeAPartnerPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'Become a Partner' }).click()
    ]);
    
    let [contactUsPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'Contact Us' }).click()
    ]);


    await aboutUsPage.waitForLoadState();
    await becomeAPartnerPage.waitForLoadState();
    await contactUsPage.waitForLoadState();
    
    let allPages = context.pages();
    console.log('total pages:', allPages.length);

    // await childWindowPage.bringToFront();
    console.log('child window title1', await aboutUsPage.title());
    console.log('child window title2', await becomeAPartnerPage.title());
    console.log('child window title3', await contactUsPage.title());

    expect(await aboutUsPage.getByRole('heading', { name: 'About OrangeHRM', level: 1 }).innerText()).toBe('About OrangeHRM');

    await aboutUsPage.close();
    await becomeAPartnerPage.close();
    await contactUsPage.close();

    console.log('parent window title', await page.title());

    await page.waitForTimeout(1000);
});
