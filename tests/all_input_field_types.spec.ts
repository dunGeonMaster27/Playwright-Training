import test from "@playwright/test";

test('all input field types test', async ({ page }) => {
    await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Saket');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Saraf');
    await page.getByRole('textbox', { name: "Email Address" }).fill('test@gmail.com');
    await page.locator('div.card').filter({ hasText: 'User Registration Form' }).getByRole('textbox', { name: 'Password' }).fill('1234');
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('1222387687');
    await page.getByRole('textbox', { name: 'Website' }).fill('www.google.com');
    await page.getByRole('spinbutton', { name: 'Age' }).fill('22');
    await page.getByRole('spinbutton', { name: 'Expected Salary (per annum)' }).fill('1222387687');
    // await page.getByRole('textbox', { name: 'Date of Birth' }).fill('31/07/2026');
    // await page.getByRole('textbox', { name: 'Preferred Meeting Time' }).fill('09:17 AM');

    // await page.getByRole('textbox', { name: 'Search' }).fill('Playwright');

    await page.getByRole('textbox', { name: 'Short Bio (textarea)' }).fill('Hi I am Saket');

    let user_id = await page.getByRole('textbox', { name: 'User ID (readonly)' }).inputValue();
    console.log('user_id', user_id);

    let acc_status = await page.getByRole('textbox', { name: 'Account Status (disabled)' }).inputValue();
    console.log('acc_status', acc_status);

    let auto_filled = await page.getByRole('textbox', { name: 'Auto-filled (with default value)' }).inputValue();
    console.log('auto_filled', auto_filled);

    await page.getByRole('textbox', { name: 'Auto-filled (with default value)' }).fill('Bina');
    
    auto_filled = await page.getByRole('textbox', { name: 'Auto-filled (with default value)' }).inputValue();
    console.log('auto_filled', auto_filled);

    await page.getByRole('radio', { name: 'Python' }).click();

    await page.getByRole('checkbox', { name: 'Cypress' }).click();
    await page.getByRole('checkbox', { name: 'Appium' }).click();
    await page.getByRole('checkbox', { name: 'Playwright' }).click();
    await page.getByRole('checkbox', { name: 'Selenium' }).click();

    await page.getByRole('radio', { name: 'Prefer not to say' }).click();

    await page.getByRole('checkbox', { name: 'I agree to the Terms & Conditions' }).click();
    
    await page.getByRole('combobox', { name: 'Country' }).selectOption('Canada');

    await page.getByRole('combobox', { name: 'Automation Tool' }).selectOption('Postman');

    await page.getByRole('listbox', { name: 'Hold Ctrl/Cmd to select multiple' }).selectOption(['SDET', 'Test Lead']);


    await page.waitForTimeout(1000);
})





test('fetch table data test1', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let table_data = await page.locator('#table02 tr').allInnerTexts();

    for (let d of table_data) {
        console.log(d);
        console.log('--------------------------------------------------------------------------------------------------------');
    }

    await page.waitForTimeout(1000);
})


test('fetch table data test2', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/afghanistan-in-ireland-2026-1528534/ireland-vs-afghanistan-2nd-odi-1528551/full-scorecard');

    let table_data = await page.locator('.ds-table-auto').nth(1).allInnerTexts();

    for (let d of table_data) {
        console.log(d);
        console.log('--------------------------------------------------------------------------------------------------------');
    }

    await page.waitForTimeout(1000);
})



