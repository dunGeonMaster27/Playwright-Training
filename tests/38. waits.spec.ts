import { test, expect } from "@playwright/test";

// 1. Auto waiting process:
// Actions: click, fill, check, hover, etc... --> automatically wait for the element:
// Actionability Check:
// 1. Attached to the DOM
// 2. Visible on the page
// 3. Stable(not animating)
// 4. Enabled
// 5. All the events are also completed


test('Wait test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('button', { name: 'Continue' }).click();

    // Explicit wait : dynamic wait:

    // 1. expect wait (web assertions wait): default time: 5000 ms
    expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    // 2. wait for URL:
    await page.waitForURL(/route=account\/register/, { timeout: 2000 });

    // 3. wait for event: dialog, filechoose, download, page

    // 4. static wait: pause for 5 secs:
    // await page.waitForTimeout(10000); //not a good practice - debugging purpoose

    // 5. wait for the element:explicitly waiting for the element:
    // 5.1: waitForSelector() ---> legacy wait-- Discouraged by Playwright
    // this wont work for the getBy* methods
    // this will work only with css / xpath / text
    // Available states: attached, visible
    await (await page.waitForSelector('#input-firstname123', { state: 'visible', timeout: 2000 })).fill('naveen');

    // 5.2: waitFor():
    // Available states: attached, detached, hidden, visible
    await page.getByRole('textbox', { name: '* First Name1' }).waitFor({ state: 'visible', timeout: 2000 });
    await page.getByRole('textbox', { name: '* First Name1' }).click();

    // timeout: 15 sec ----> navigationTimeout: 5 sec ----> timeout: 2 sec
    await page.locator('#input-firstname123').fill('naveen', { timeout: 2000 });
    

    await page.waitForTimeout(1000);
});



