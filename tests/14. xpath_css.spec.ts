import { test } from "@playwright/test";

test('locators test', async ({ page }) => {

    // xpath: address of the element in the HTML DOM

    // 1. Absolute xpath: /html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input
    // page.locator('/html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input').fill();


    // 2. Relative custom xpath: //htmltag[@attr='value']
    // input[@id='input-firstname']

    // htmltag[@attr1='value' and @attr2='value']
    // input[@name='firstname' and @id='input-firstname']
    // page.locator("//input[@id='input-firstname']").click();

    // text():
    // htmltag[text()='value']
    // h1[text()='Register Account']

    // contains():
    // htmltag[contains(@attr, 'value')]
    // input[contains(@id, 'lastname')]

    // contains() with text():
    // htmltag[contains(text(), 'value')]
    // h1[contains(text), 'Account')]

    
    // starts-with():
    // h1[starts-with(text(), 'Register')]
    // ends-with (): not a valid function

    // td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    // td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('//input[@id="input-firstname"]').fill('Saket');

    let header = await page.locator('//h1[text()="Register Account"]').textContent();
    console.log('header - ', header);

    await page.locator('//input[contains(@id, "lastname")]').fill('Saraf');

    await page.locator('//h1[contains(text(),"Register Account")]').highlight();


    // CSS:

    // 1. id:
    // #id
    // htmltag#id
    // input#input-firstname
    
    // 2. class:
    // .class
    // htmltag.class

    // .c1.c2.c3...cn
    // .alert.alert-danger.alert-dismissible

    // 3. id and class not available
    // htmltag[attr = 'value']
    // input[placeholder = 'E-Mail Address'] --css

    // input[@placeholder = 'E-Mail Address'] --xpath
    
    // input[placeholder = 'E-Mail Address'][name = 'email']


    await page.locator('input#input-firstname').fill('new Saket');


    await page.waitForTimeout(2000);
});