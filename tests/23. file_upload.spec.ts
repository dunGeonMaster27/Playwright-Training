import test from "@playwright/test";

test('Single File Upload test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#single-file').setInputFiles('/Users/saket/Downloads/test.pdf');
    await page.waitForTimeout(1000);
    await page.locator('#single-file').setInputFiles([]); // removes the file

    await page.waitForTimeout(1000);
});

test('Multiple File Upload test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#multi-file').setInputFiles(['/Users/saket/Downloads/test.pdf', '/Users/saket/Downloads/test copy.pdf']);
    await page.waitForTimeout(1000);
    await page.locator('#multi-file').setInputFiles([]); // removes the file

    await page.waitForTimeout(1000);
});

test('File Upload test Without <input type="file">', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()
    ]);

    await fileUpload.setFiles(['/Users/saket/Downloads/test.pdf', '/Users/saket/Downloads/test copy.pdf']);
    await page.waitForTimeout(1000);
    await fileUpload.setFiles([]);


    await page.waitForTimeout(1000);
});