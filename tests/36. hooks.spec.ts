import { test } from "@playwright/test";

// Hooks: Before(Setup) and After(Teardown)

// Runs once before all tests
test.beforeAll(async () => {
    console.log('Before all tests - Connect DB');
})

// Runs before each test
test.beforeEach(async () => {
    console.log('Before each test - Login app');
})

// Runs after each test
test.afterEach(async () => {
    console.log('After each test - Logout app');
})

// Runs once after all tests
test.afterAll(async () => {
    console.log('After all tests - Disconnect DB');
})


test('Hooks test 1', async () => {
    console.log('hooks test 1');
});


test('Hooks test 2', async () => {
    console.log('hooks test 2');
});



// npx playwright test "tests/36. hooks.spec.ts" --workers=1 