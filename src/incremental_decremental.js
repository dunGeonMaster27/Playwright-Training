//++ and --

//1. post increment
//first assign and then increase

let a = 1;
let b = a++;

console.log(a); //2
console.log(b); //1

let x = -99;
let y = x++;

console.log(x); //-98
console.log(y); //-99


let num = 10;

console.log(num++); //10
console.log(num); //11


//2. pre increment
//first increase and then assign

let n = 1;
let m = ++n;

console.log(n); //2
console.log(m); //2


let u = -1000;
let v = ++u;

console.log(u); //-999
console.log(v); //-999


//3. post decrement
//first assign and then decrease

let w = 2;
let r = w--;

console.log(w); //1
console.log(r); //2


//4. pre decrement
// first decrease and then assign

let o = 1;
let p = --o;

console.log(o); //0
console.log(p); //0



let pop = 10;
console.log(++pop); //11
console.log(pop); //11

let rest = -9;
console.log(--rest); //-10
console.log(rest); //-10


const rest = -9;
console.log(--rest); //TypeError: Assignment to constant variable.
console.log(rest); //TypeError: Assignment to constant variable.