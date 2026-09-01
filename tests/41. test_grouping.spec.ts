import { test } from "@playwright/test";

// test groups -> test suites -> multiple test cases
// test.describe() -> test() test() ......

test.describe('Login test cases', () => {
    test('Login test', async () => {
        console.log('Login test');
    });

    test('Title test', async () => {
        console.log('Title test');
    });

})

test.describe.serial('Sequential CRUD test cases', () => {
    test('Create User test', async () => {
        console.log('Create User test');
    });

    test('Read User test', async () => {
        console.log('Read User test');
    });

    test('Update User test', async () => {
        console.log('Update User test');
    });

    test('Delete User test', async () => {
        console.log('Delete User test');
    });

})

