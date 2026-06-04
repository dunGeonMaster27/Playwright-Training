let x = 100;
let y = 200;

let a = 'selenium';
let b = 'playwright';

console.log(x + y); //300
console.log(a + b); //seleniumplaywright
console.log(x + a); //100selenium
console.log(a + y); //selenium200
console.log(x + y + a + b); //300seleniumplaywright

console.log(a + b + x + y); //seleniumplaywright100200

console.log(a + b + (x + y)); //seleniumplaywright300

console.log(x + y + a + b + x + y); //300seleniumplaywright100200

console.log(1 + "1"); //11
console.log("1" + 1); //11

console.log(1 + 1); //2
console.log("1" + "1"); //11

console.log('-----------------');

//Type coercion in JavaScript is the automatic or implicit conversion of a value from one data type to another
console.log(1 - "1"); //0

console.log("5" - 2); //3
console.log("5" + 2); //52

console.log("10" - "4"); //6

console.log(1 - "hello"); //NaN - not a number (unable to convert hello to a number)

console.log('-----------------');

console.log(10 / "2"); //5
console.log("20" / "5"); //4

console.log("20" / "testing"); //NaN

console.log('-----------------');

console.log(10 * "2"); //20
console.log(10 * "hello"); //NaN

console.log('-----------------');

// exponential (**)
console.log(2 ** 3); //8
console.log("2" ** 3); //8

console.log('-----------------');

// Unary Plus Operator (+): Converts to a number

console.log(+"42"); //42 (number)
console.log(+"42" + 5); //47

console.log(1 + "1"); //11
console.log(1 + +"1"); //2
console.log(+"hello" + 1); //NaN

console.log('-----------------');

// Unary Negative Operator (-): Converts to a number

console.log("-42" + 100); //-42100
console.log(-"42" + 100); //58
console.log(-"130" - 20); //150
console.log(100 - "40"); //60
console.log(100 - -"40"); //140






