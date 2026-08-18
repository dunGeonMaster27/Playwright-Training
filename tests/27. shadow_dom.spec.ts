import test from "@playwright/test";

// Browser -> Page -> Element
//                 -> Shadow DOM -> Element (Auto Piercing)
// Normal xpath cant be used for shadow dom

test('shadow dom element test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('button', { name: 'Click Me' }).click();

    await page.locator('#username').fill('Saket');
    await page.locator('#email').fill('test@gmail.com');
    await page.locator('#bio').fill('Testing');
    await page.locator('#submit-btn').click();

    await page.locator('#inner-input').fill('Saket');

    await page.locator('#deep-btn').click();

    await page.getByRole('button', { name: 'Slotted Button' }).click();

    // await page.getByRole('textbox', { name: 'Type in closed shadow...' }).fill('Testing'); // Closed Shadow DOM cant be automated

    await page.locator('.todo-list li').filter({ hasText: 'Handle Shadow DOM locators' }).locator('input').click();

    await page.locator('#framework-select').selectOption('Playwright');

    await page.waitForTimeout(1000);
});



test('shadow dom element test1', async ({ page }) => {
    await page.goto('https://shop.polymer-project.org/');

    await page.getByRole('link', { name: "Men's Outerwear Shop Now" }).click();

    await page.waitForTimeout(1000);
});


