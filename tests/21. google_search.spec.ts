import test from "@playwright/test";

test('google search test', async ({ page }) => {
    await page.goto('https://www.google.com');

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright jobs');

    await page.getByText('playwright jobs in bangalore').click();

    await page.waitForTimeout(1000);
});


test('flipkart search test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByRole('button', { name: '✕' }).click();

    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).first().fill('macbook');

    await page.getByRole('link', { name: 'macbook air m1' }).click();

    await page.waitForTimeout(1000);
});