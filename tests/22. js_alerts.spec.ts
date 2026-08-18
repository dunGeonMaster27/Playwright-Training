import test from "@playwright/test";

// JS Alert - JS Popup - Modal Dialogues

// JS Methods - 
// 1. Alert ('Error Message')
// 2. Confirm ('Are you sure?')
// 3. Prompt ('Message with textbox input')



test('JS Alert popup test', async ({ page }) => {

    // 1. Alert - Just accept it - This is a listener which overrides Playwright default listener
    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept();
        }

        else if (popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept();
            // await popup.dismiss(); -- Click cancel
        }

        else if (popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Prompt text');
        }
    })

    

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    await page.waitForTimeout(1000);
});

