import { test, expect } from "@playwright/test";

test.use({
    viewport: { width: 1664, height: 1000 }
})

test('Window Size test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.waitForTimeout(1000);
});



test('Window Size test1', async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 600 });

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.waitForTimeout(1000);
});



