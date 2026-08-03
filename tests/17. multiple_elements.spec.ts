import { test } from "@playwright/test";

test('fetch all links test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    let allLinks = await page.locator('a[href]').all();
    console.log('total links:', allLinks.length);

    let allLinksCount = await page.locator('a[href]').count();
    console.log('total links:', allLinksCount);

    for (let e of allLinks) {
        console.log(await e.textContent(), ":", await e.getAttribute('href'));
    }

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allSideLinks = await page.locator('.list-group-item').all();
    for (let i of allSideLinks) {
        console.log(await i.textContent(), ':', await i.getAttribute('href'));
    }


    await page.waitForTimeout(2000);
});


test('fetch all side links test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allSideLinks = await page.locator('a.list-group-item').all();
    for (let i of allSideLinks) {
        await i.highlight();
        console.log(await i.textContent(), ':', await i.getAttribute('href'));
        await page.waitForTimeout(700);

        if (await i.textContent() === 'Recurring payments') {
            await i.click();
            break;
        }
    }

    await page.waitForTimeout(2000);
});


test('fetch all headers text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', { name: "E-Mail Address" }).fill('saket@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();

    let allHeaderText = await page.getByRole('heading', { level: 2 }).allInnerTexts();
    for (let e of allHeaderText) {
        console.log(e);
    }


    await page.waitForTimeout(2000);
});



// <a login>
//    <a childLogin>

// textContent(): text of the element + text of the child element -> login childLogin
// innerText(): only text of the element -> login




test('test all footer links', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allfooters = await page.locator('footer').getByRole('link').all();
    for (let e of allfooters) {
        console.log('text:', await e.innerText());
        await e.click();
        console.log('title:', await page.title());
        await page.goBack();
    }

    await page.waitForTimeout(2000);
})

