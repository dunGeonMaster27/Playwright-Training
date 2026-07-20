import { test, Page } from '@playwright/test';

test('back and forward simulation test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    console.log(await page.title());

    await page.goto('https://www.google.com');
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(1000);

    await page.goForward();
    console.log(await page.title());
    await page.waitForTimeout(1000);
    
    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(1000);

    await page.reload();
    await page.waitForTimeout(1000);
}
)