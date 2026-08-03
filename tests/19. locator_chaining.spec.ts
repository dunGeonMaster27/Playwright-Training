import { test } from "@playwright/test";

test('locator chaining test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('form').getByRole('textbox', { name: 'First Name' }).fill('Saket');

    await page.waitForTimeout(2000);
});


test('locator chaining test1', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('checkbox')
        .click();


    await page
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('button', { name: 'Delete' })
        .click();

    let salary = await page
        .locator('#table02 tr')
        .filter({ hasText: 'Cedric Kelly' })
        .locator('td')
        .nth(5)
        .innerText();

    console.log('salary', salary);
    


    await page.waitForTimeout(2000);
});


test('cricinfo test', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/pakistan-in-west-indies-2026-1538621/west-indies-vs-pakistan-2nd-test-1538631/full-scorecard');

    let wicket = await page
        .locator('.ci-scorecard-table tr')
        .filter({ hasText: 'Brandon King' })
        .first()
        .locator('td')
        .nth(1)
        .locator('span')
        .last()
        .innerText();
    console.log('wicket', wicket);

    await page.waitForTimeout(1000);
})


