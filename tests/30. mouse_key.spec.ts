import test, { expect } from "@playwright/test";

test('right click test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.getByText('right click me', { exact: true }).click({ button: "right" });

    await page.getByText('Delete', { exact: true }).click({ button: "left" });

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

    await page.getByText('Tiers', { exact: true }).first().waitFor({ state: 'visible' });
    await page.getByText('Tiers', { exact: true }).first().click();

    await page.waitForTimeout(5000);
});



test('mouse hover test1', async ({ page }) => {
    await page.goto('https://www.bigbasket.com/');

    await page.getByRole('button', { name: 'Shop by Category' }).last().click();

    await page.waitForTimeout(500);

    await page.getByRole('link', { name: 'Beverages' }).last().waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Beverages' }).last().hover();

    await page.waitForTimeout(500);

    await page.getByRole('link', { name: 'Tea' }).first().waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Tea' }).first().hover();

    await page.getByRole('link', { name: 'Green Tea' }).waitFor({ state: 'visible' });
    await page.getByRole('link', { name: 'Green Tea' }).click();


    await page.waitForTimeout(1000);
});




test('press keyboard keys test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.fill('Macbook');
    await searchBox.press('Enter');

    await page.waitForTimeout(1000);
});



test('press keyboard keys sequentially test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.pressSequentially('M');
    await searchBox.pressSequentially('a');
    await searchBox.pressSequentially('c');
    await searchBox.pressSequentially('b');
    await searchBox.pressSequentially('o');
    await searchBox.pressSequentially('o');
    await searchBox.pressSequentially('k');
    await searchBox.press('Enter');

    await page.waitForTimeout(1000);
});




test('press keyboard keys sequentially test1', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let random_string = (Math.random() + 1).toString(36).substring(7);

    for (let i = 0; i < 23; i++) {
        await page.keyboard.press('Tab');
    }

    await page.keyboard.type('Saket');
    await page.keyboard.press('ControlOrMeta+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Saket');
    await page.keyboard.press('ControlOrMeta+A');
    await page.keyboard.press('ControlOrMeta+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ControlOrMeta+V');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`${random_string}@gmail.com`);
    await page.keyboard.press('Tab');
    await page.keyboard.type('9823923493');
    await page.keyboard.press('Tab');
    await page.keyboard.type('test@123');
    await page.keyboard.press('Tab');
    await page.keyboard.type('test@123');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    expect(await page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 }).innerText()).toBe('Your Account Has Been Created!');

    await page.getByRole('link', { name: 'Continue' }).click({ button: 'middle' });
    await page.getByRole('link', { name: 'Continue' }).click({ modifiers: ['ControlOrMeta'] });

    await page.waitForTimeout(1000);
});