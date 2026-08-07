import { Page, test } from "@playwright/test";

async function selectChoice(page: Page, choices: String[]) {
    for (let c of choices) {
        await page
            .locator('.comboTreeItemTitle')
            .filter({ hasText: `${c}` })
            .first()
            .click();
    }
}


test('non select based dropdown test', async ({ page }) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator('#justAnInputBox').click();

    await selectChoice(page, ['choice 1', 'choice 2', 'choice 3']);

    

    await page.waitForTimeout(1000);
});