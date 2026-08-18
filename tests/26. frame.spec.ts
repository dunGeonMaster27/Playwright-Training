import test from "@playwright/test";

test('iframe element test', async ({ page }) => {
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    let iframeLocator = page.frameLocator('#frame-one748593425'); // capture the iframe
    await iframeLocator.locator('#RESULT_TextField-1').fill('Saket');

    let formText =  await page.getByRole('heading', { name: 'Vehicle Registration Form', level: 3 }).innerText();
    console.log('formText -', formText);

    await page.waitForTimeout(1000);
});


test('iframe element test1', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let headerText = await page.frameLocator('[name="main"]').getByRole('heading', { name: 'Title bar (top.html)', level: 2 }).innerText();
    console.log('headerText -', headerText);

    await page.waitForTimeout(1000);
});




test('total frames count test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let allFrames = page.frames();
    console.log('total frames count -', allFrames.length);

    for (let e of allFrames) {
        console.log(e.name(), ':', e.url());
    }

    await page.waitForTimeout(1000);
});



test('nested iframes test', async ({ page }) => {
    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    await page.frameLocator('#parent_iframe').locator('#u_5_5').click();

    await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('#u_5_6').click();

    await page.waitForTimeout(1000);
});
