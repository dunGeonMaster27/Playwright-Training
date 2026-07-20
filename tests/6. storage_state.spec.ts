import test from "@playwright/test";

test.use({ storageState: 'states/logged_in_state.json' });
test('launch cart without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.waitForTimeout(2000);
});