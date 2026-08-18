import test from "@playwright/test";

// SVG: Scalable Vector Graphics -

// xpath:
// 1. normal xpath will not be used
// 2. special xpath using local-name() or name()

// css:
// 1. regular css selectors


// normal xpath - //svg[@fill='none'] -> wont work

// special xpath - //*[local-name()='svg' and @fill='none'] -> this will work

// css - svg[fill='none'] -> will work



test('svg test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByRole('button', { name: '✕' }).click();
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('macbook');

    await page.getByRole('button', { name:'Search for Products, Brands and More'}).locator("//*[local-name()='svg' and @fill='none']").click();

    await page.waitForTimeout(1000);
});




test('svg test1', async ({ page }) => {
    await page.goto('https://petdiseasealerts.org/forecast-map#/');


    await page.waitForTimeout(5000);

    let allRegions = await page.frameLocator("iframe[id *= 'map-instance']").locator('g.region').all();
    console.log('Total regions:', allRegions.length);

    for (let e of allRegions) {
        await e.hover({force: true});
        console.log(await e.getAttribute('id'));
        await page.waitForTimeout(100);
    }

    await page.frameLocator("//iframe[contains(@id,'map-instance')]").locator('#california').click();

    await page.waitForTimeout(1000);
});






