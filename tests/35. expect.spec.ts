import { test, expect } from "@playwright/test";

// Assertions - expect() method
// Soft and Hard Assertions
// In Built Assertions
// Default Timeout: 5 sec

// Expectation vs Actual Result: Checkpoint, Validation Point


test('Expect Assertion test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    expect(200).toBe(200);

    expect(page.url()).toContain('account/register');

    expect(await page.title()).toBe('Register Account');

    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });
    await expect(header).toBeVisible();

    await expect.soft(header).toHaveText('Register Account');

    await expect(header).toHaveText('Register Account');

    await expect(page.locator('#column-right a')).toHaveCount(13);

    let first_name = page.getByRole('textbox', { name: 'First Name' });
    await first_name.fill('Saket');
    await expect(first_name).toHaveValue('Saket');

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    let country_dropdown = page.getByTestId('country-select');
    await expect(country_dropdown.locator('option')).toHaveCount(6);

    await country_dropdown.selectOption('United States');
    await expect(country_dropdown).toHaveValue('us');

    console.log('-----------END-----------');

    await page.waitForTimeout(1000);
});




test('Expect Assertion test1', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.getByRole('textbox', { name: 'FIRST NAME' })).toBeEmpty({timeout: 1000});
    await expect(page.locator('#username')).not.toBeEditable();

    let button = page.getByRole('button', { name: 'Create Account' });

    await expect(button).toBeDisabled();

    await page.locator('#agree').check();
    await expect(page.locator('#agree')).toBeChecked();
    await expect(button).toBeEnabled();

    await page.locator('#agree').uncheck();
    await expect(page.locator('#agree')).not.toBeChecked();
    await expect(button).toBeDisabled();

    await expect(page.getByRole('textbox', { name: 'FIRST NAME' })).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', { name: 'FIRST NAME' })).toHaveId('firstname');

    await expect(page.locator('#username')).toHaveAttribute('readonly', '');



    console.log('-----------END-----------');

    await page.waitForTimeout(1000);
});




// AAA Pattern: Arrange, Act, Assert
// Per Test Case -> Only 1 Hard Assertion
// Per Test Case -> Multiple Soft Assertions


