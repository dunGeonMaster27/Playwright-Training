import test from "@playwright/test";

test('right click test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.getByText('right click me', { exact: true }).click({ button: "right" });
    
    await page.getByText('Delete', { exact: true }).click({button: "left"});

    await page.waitForTimeout(1000);
});


test('drag and drop test', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');

    let source = page.frameLocator('.demo-frame').locator('#draggable');
    let target = page.frameLocator('.demo-frame').locator('#droppable');

    await source.dragTo(target);

    await page.waitForTimeout(1000);
});



test('mouse hover test', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');

    await page.getByText('SpiceClub', { exact: true }).first().hover();

    await page.getByText('Tiers', { exact: true }).first().waitFor({state: 'visible'});
    await page.getByText('Tiers', { exact: true }).first().click();

    await page.waitForTimeout(5000);
});



test('mouse hover test1', async ({ page }) => {
    await page.goto('https://www.bigbasket.com/');

    await page.getByRole('button', { name: 'Shop by Category' }).last().click();

    await page.getByRole('link', { name: 'Beverages' }).last().waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Beverages' }).last().hover();

    await page.waitForTimeout(500);
    
    await page.getByRole('link', { name: 'Tea' }).first().waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Tea' }).first().hover();

    await page.getByRole('link', { name: 'Green Tea' }).waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Green Tea' }).click();


    await page.waitForTimeout(1000);
});