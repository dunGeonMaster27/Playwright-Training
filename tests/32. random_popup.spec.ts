import test from "@playwright/test";

test('kill random popup test', async ({ page }) => {

    await page.addLocatorHandler(
        page.getByRole('button', { name: 'Allow all' }),
        async (btn) => {
            await btn.click();
        }
    )

    await page.goto('https://orangehrm.com/contact-sales');

    await page.getByRole('textbox', { name: 'Full Name' }).fill('Saket');

    await page.waitForTimeout(1000);
});



test('kill random popup test1', async ({ page }) => {

    await page.addLocatorHandler(
        page.getByRole('button', { name: 'Accept All' }),
        async (btn) => {
            await btn.click();
            console.log('clicked 1');
        }
    )

    await page.goto('https://www.cricinfo.com/');
    await page.waitForTimeout(2000);



    await page.getByRole('link', { name: 'Live Scores' }).click();

    await page.waitForTimeout(3000);
});