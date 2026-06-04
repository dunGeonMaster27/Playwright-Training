// Data Types
// 1. Primitive Data Type: memory is fixed - pre defined data type
// - number
// - string
// - boolean
// - BigInt
// - undefined
// - null


// 2. Non-Primitive Data Type: Reference Type - memory is not fixed (dynamic)
// - Array
// - Objects
// - Functions
// - Map/List/Set




// There are 3 identifiers for variables: var, let, const
// 1. number
// size: 8 bytes = 64 bits

let x = 10;
console.log(x);
console.log(typeof x); // number


let y = 10.333;
console.log(y);
console.log(typeof y); // number


let z = -100;
console.log(z);
console.log(typeof z); // number


// 2. string
// "" or ''
// size: 2 bytes per character

let name = 'Saket';
console.log(name);
console.log(typeof name); //string


let m1 = "$";
console.log(m1);
console.log(typeof m1); //string


let m2 = "10000";
console.log(m2);
console.log(typeof m2); //string


let p;
console.log(p); //undefined
console.log(typeof p); //undefined


// 3. boolean: true/false
// size: 4 bytes

let flag = true;
console.log(flag);
console.log(typeof flag); //boolean


// 4. undefined
// size: 0 bytes

let firstName = undefined;
console.log(firstName);
console.log(typeof firstName); //undefined


// 5. null: no values
// size: 0 bytes

let obj = null;
console.log(obj);
console.log(typeof obj); //object - this is legacy bug in javascript


// Re-initialization
let c = 10;
c = 20;
console.log(c);


// var - legacy way of declaring variables
var i = 20;
var i = 10;
console.log(i); //10

//let
let i = 20;
let i = 10;
console.log(i); //SyntaxError: Identifier 'i' has already been declared

//const -> fixed value
const pi = 3.14;
console.log(pi); //3.14
pi = 2;
console.log(pi); //TypeError: Assignment to constant variable.


const title;
console.log(title); //SyntaxError: Missing initializer in const declaration


let text;
console.log(text); //undefined


// const:
// redeclaration: No
// reassignment: No


// let:
// redeclaration: No
// reassignment: Yes


// var:
// redeclaration: Yes
// reassignment: Yes



// Hoisting - Access a variable before declaration
// let/const - not allowed - ReferenceError
// var - allowed - undefined - no error

console.log(k);
let k = 10; //ReferenceError: Cannot access 'k' before initialization

console.log(p);
var p = 10; //undefined

console.log(i);
const i = 10; //ReferenceError: Cannot access 'i' before initialization

