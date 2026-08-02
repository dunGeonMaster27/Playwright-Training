import test from "@playwright/test";

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByText('New Customer', { exact: true }).highlight();

    await page.waitForTimeout(2000);
});