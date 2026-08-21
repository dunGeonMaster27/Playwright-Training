import test from "@playwright/test";

test('mouse hover and tooltip test', async ({ page }) => {
    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');


    let markers = await page.locator('.highcharts-markers .highcharts-point').all();

    for (let marker of markers) {
        await marker.hover();

        let box = await marker.boundingBox();
        let center_x = box!.x + box!.width / 2;
        let center_y = box!.y + box!.height / 2;

        await page.mouse.move(center_x, center_y);

        console.log(await page.locator('.highcharts-tooltip text').textContent());
    }

    await page.waitForTimeout(1000);
});


test('mouse hover and tooltip test1', async ({ page }) => {
    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');

    let markers = await page.locator('.highcharts-series-group .highcharts-series-0 .highcharts-point').all();

    for (let marker of markers) {
        await marker.hover({ force: true });

        let box = await marker.boundingBox();
        let center_x = box!.x + box!.width / 2;
        let center_y = box!.y + box!.height / 2;

        await page.mouse.move(center_x, center_y);

        console.log(await page.locator('.highcharts-tooltip text').textContent());
    }

    await page.waitForTimeout(1000);
});


test('mouse hover and tooltip test2', async ({ page }) => {
    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');

    let markers = await page.locator('.highcharts-series-group .highcharts-series-1 .highcharts-point').all();

    for (let marker of markers) {
        await marker.hover({ force: true });

        let box = await marker.boundingBox();
        let center_x = box!.x + box!.width / 2;
        let center_y = box!.y + box!.height / 2;

        await page.mouse.move(center_x, center_y);

        console.log(await page.locator('.highcharts-tooltip text').textContent());
    }

    await page.waitForTimeout(1000);
});



