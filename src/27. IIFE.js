// IIFE: Immediately Invoked Function Expression
// this is also an anonymous function
// this function will be invoked by itself


(function () {
    console.log('hello world');
})(); // hello world



(() => {
    console.log('hello world');
})(); // hello world


((username) => {
    console.log('hello world', username);
})('saket'); // hello world saket



// simple function
// function expression
// anonymous function
// IIFE
// arrow function
// callback function
// async await function