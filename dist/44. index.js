let x = 10;
console.log(x); //10
console.log(typeof x); //number
let y = 'test';
console.log(typeof y); //string
let z = true;
console.log(typeof z); //boolean
function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); //5
// console.log(add(2, 'test')); //2test (It converts the code to JS at runtime)
function printing() {
    console.log('printing');
}
printing();
function getNumber() {
    return [1, 2, 3,];
}
console.log(getNumber());
let sub = (a, b) => a - b;
console.log(sub(5, 3));
export {};
//# sourceMappingURL=44.%20index.js.map