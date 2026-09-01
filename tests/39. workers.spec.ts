import { test, expect } from "@playwright/test";

//workers: processes --> nodeJS
//sequence or parallel mode

//workers = 1: sequence mode
//workers = 4 : parallel mode

//default worker count: cpu core = 8 / 2 = 4 (50%)

//cpu core = 1; w=4 : sequence

//fullyParallel = true, w=4
//total tcs = 82 (test case pool)
//all the files and their test cases also will start running in the parallel mode
//make sure that all the test cases are independent

//fullyParallel = false, w=4 (within a file, the tcs will run in squential)
//w1 - file 1 (10 tcs) -- 10 tcs will run in the sequential mode
//W2 - file 2 (5 tcs) - 5 tcs will run in the sequential mode
//w3 -- file 3
//w4 -- file 4


test('Workers test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.waitForTimeout(1000);
});



