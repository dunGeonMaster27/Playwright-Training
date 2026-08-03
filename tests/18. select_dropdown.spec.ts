import { test } from "@playwright/test";

test('select a dropdown test', async ({ page }) => {
    await page.goto('https://orangehrm.com/contact-sales');

    // select by direct dropdown value
    let selectedVal = await page.getByRole('combobox', { name: 'Country' }).selectOption('India');
    console.log('selectedVal:', selectedVal);
    await page.waitForTimeout(800);

    // select by visible text
    selectedVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Angola' });
    console.log('selectedVal:', selectedVal);
    await page.waitForTimeout(800);

    // select by value
    selectedVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Aruba' });
    console.log('selectedVal:', selectedVal);
    await page.waitForTimeout(800);

    // select by index
    selectedVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 4 });
    console.log('selectedVal:', selectedVal);

    let inputVal = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log('inputVal:', inputVal);

    await page.waitForTimeout(2000);
});



test('multi select dropdown test', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    // multiple attribute is present in select tag
    let selectVal = await page.locator('[name="Month"]').selectOption(['May', 'July', 'December']);
    console.log('selectVal', selectVal);  

    let inputVal = await page.locator('[name="Month"]').inputValue();
    console.log('inputVal', inputVal);  

    await page.waitForTimeout(2000);
})
