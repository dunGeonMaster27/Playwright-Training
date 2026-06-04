// function without a class : function
// function within a class : method

function test() {
    console.log('hello world');
}

let t = test();
console.log(t); //undefined (function returns undefined if no return statement)

console.log('-------------------');

function getNumber() {
    console.log('getting some number');
    return 100;
}

console.log(getNumber());

console.log('-------------------');

function launchBrowser() {
    console.log('launching browser');
    return true;
}

if (launchBrowser) {
    console.log('enter the url');
}
else {
    console.log('dont enter url');
}

console.log(typeof launchBrowser); //function

console.log('-------------------');

function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); //3

console.log(add(1, 'naveen')); //1naveen

console.log('-------------------');

function launchBrowser(browserName) {
    console.log('launching browser:', browserName);
    
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched successfully');
            return true;
        case 'firefox':
            console.log('firefox is launched successfully');
            return true;
        default:
            console.log('Invalid Browser', browserName);
            return false;
    }
}

let isBrowserLaunched = launchBrowser('  Chrome   ');
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log('enter the url');
}

console.log('-------------------');

function printing() {
    console.log('printing 1');
}

function printing() {
    console.log('printing 2');
}

function printing(name) {
    console.log('printing 3');
}

printing(); //SyntaxError: Identifier 'printing' has already been declared

// Function Overloading is not allowed in new javascript,
// but with older javascript(commonjs), the latest printing 3 function will be called