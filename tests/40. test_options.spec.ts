import { test } from "@playwright/test";


test('Title test', async () => {
    console.log('Title test');
});

test('URL test', async () => {
    console.log('URL test');
});

// test.only('Search test', async () => {
//     console.log('Search test');
// });

test.skip('Cart test', async () => {
    console.log('Cart test');
});

test('Payment test', async () => {
    console.log('Before fix it payment test');
    test.fixme(); // known issue, fix it later (Playwright will run till this line and then skips the test)
    console.log('Payment test');
});

test('Order test', async () => {
    test.fail(); // this test is expected to fail
    console.log('Order test');
});


