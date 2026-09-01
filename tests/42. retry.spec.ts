import { test, expect } from "@playwright/test";

test.describe('Login test cases', () => {

    test.describe.configure({ retries: 1 });

    test('Login test', async () => {
        console.log('Login test');
    });

    test('Random test', async () => {
        expect(100).toBe(200);
    });

})


