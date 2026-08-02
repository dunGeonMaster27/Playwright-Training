import { test } from "@playwright/test";

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByTitle('naveenopencart').click();

    await page.waitForTimeout(2000);
});