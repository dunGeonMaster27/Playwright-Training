import test from "@playwright/test";

test('web table pagination test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {
        let isUserPresent = await page.getByText('harper_shah', { exact: true }).first().isVisible();
        if (isUserPresent) {
            // user is present on 1st page
            await page
                .locator('table#dataTable tr')
                .filter({ hasText: 'harper_shah' })
                .first()
                .getByRole('checkbox')
                .check();
            break;
        }
        else {
            // user is not present on 1st page
            await page.getByRole('button', { name: '›' }).click();
            await page.waitForTimeout(500);
        }
    }

    await page.waitForTimeout(1000);
});


test('web table pagination test1', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {
        let isUserPresent = await page.getByText('test', { exact: true }).first().isVisible();
        if (isUserPresent) {
            // user is present on 1st page
            await page
                .locator('table#dataTable tr')
                .filter({ hasText: 'test' })
                .first()
                .getByRole('checkbox')
                .check();
            break;
        }
        else {
            // user is not present on 1st page
            let nextButton = page.getByRole('button', { name: '›' });
            if (await nextButton.isDisabled()) {
                console.log('Element not found');
                break;
            }
            else {
                await nextButton.click();
            }
        }
    }
    await page.waitForTimeout(1000);
});




test('web table pagination test with multiple selections', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {
        let allUserRows = await page.locator('table#dataTable tr').filter({ hasText: 'jane_smith' }).getByRole('checkbox').all();
        if (allUserRows.length > 0) {
            // user is present on 1st page
            for (let user of allUserRows) {
                await user.check();
            }
        }

        let nextButton = page.getByRole('button', { name: '›' });
        if (await nextButton.isDisabled()) {
            break;
        }
        else {
            await nextButton.click();
        }
        
    }
    await page.waitForTimeout(1000);
});