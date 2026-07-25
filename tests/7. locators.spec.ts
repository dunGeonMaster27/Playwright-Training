import test from "@playwright/test";

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('saket@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();


    // xpath
    // await page.locator("//input[@name='search']").fill('test');

    // css
    // await page.locator("#input-password").fill('123');

    let header_value = await page.getByRole('heading', { name: 'Returning Customer', level: 2 }).textContent();
    console.log('header-', header_value);

    // level can be used for headings with h1, h2,.....,h6 html codes


});