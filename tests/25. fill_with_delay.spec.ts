import test from "@playwright/test";

test('fill value with delay test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('#input-firstname').pressSequentially('Saket', {delay:300});


    await page.waitForTimeout(1000);
});

