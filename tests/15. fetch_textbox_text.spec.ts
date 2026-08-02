import { test } from "@playwright/test";

test('fetch text box test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Saket');

    let text = await page.getByRole('textbox', { name: 'First Name' }).inputValue();
    console.log('text entered -', text);
    

    await page.waitForTimeout(2000);
});