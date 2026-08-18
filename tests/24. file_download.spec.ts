import { test, expect } from "@playwright/test";
import fs from 'fs';

test('File Download test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    let [downloaded_file] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'archivo-de-prueba.txt' }).click()
    ])

    // make sure there are no failure in download process
    expect(await downloaded_file.failure()).toBeNull();

    // get the file name
    console.log('file name:', downloaded_file.suggestedFilename());

    // save to a specific path
    let filePath = './downloads/' + downloaded_file.suggestedFilename();
    await downloaded_file.saveAs(filePath);

    // verify the file exists
    expect(fs.existsSync(filePath)).toBeTruthy();

    // verify the file size > 0 kb
    let fileSize = fs.statSync(filePath).size;
    console.log('file size:', fileSize);
    expect(fileSize).toBeGreaterThan(0);

    await page.waitForTimeout(1000);
});