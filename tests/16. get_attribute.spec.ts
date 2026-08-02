import { test } from "@playwright/test";

test('fetch text box test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let ph = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('placeholder');
    console.log('placeholder -', ph);
    
    

    await page.waitForTimeout(2000);
});