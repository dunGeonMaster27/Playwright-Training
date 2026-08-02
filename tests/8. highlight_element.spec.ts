import test from "@playwright/test";

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('heading', { name: 'Returning Customer', exact: true }).highlight();

    await page.getByRole('link', { name: 'Forgotten Password', exact: true }).nth(0).highlight();

    

    await page.waitForTimeout(2000);
});