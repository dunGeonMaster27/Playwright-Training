import test from "@playwright/test";

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // get by label - only works for input fields
    await page.getByLabel('E-Mail Address').fill('saket@test.com');
    await page.getByLabel('Password').fill('123');


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByLabel('Yes').click();

    // get by placeholder - only works for text fields
    await page.getByPlaceholder('First Name').fill('Saket');
    await page.getByPlaceholder('Last Name').fill('Saraf');

    // getByAltText - for images
    await page.getByAltText('naveenopencart').highlight();



    await page.waitForTimeout(2000);
});