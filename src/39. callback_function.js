// Callback Function: Calling a function by passing another function as parameter

function testing(callback) {
    console.log('hello from testing');
    callback();
}

function print() {
    console.log('hello from printing');
}

testing(print);
// hello from testing
// hello from printing


let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

let calculator = (callback, a, b) => {
    console.log('doing the calculation');
    return callback(a, b);
}

console.log(calculator(add, 1, 3)); //4
console.log(calculator(sub, 5, 3)); //2
console.log(calculator(mul, 5, 3)); //15
console.log(calculator(div, 6, 3)); //2




// wait for some time (4 secs) and then callback - perform some action

setTimeout(() => {
    console.log('printing after 4 sec');
}, 4000);

