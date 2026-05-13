let i = 11;
let j = i++ + ++i; //11 + 13

console.log(i); //13
console.log(j); //24

console.log('-------------');


let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b; //11 + 22 + 11 + 22 + 13 + 24

console.log(a); //13
console.log(b); //24
console.log(c); //103


console.log('-------------');


let i = 0;
let j = i++ - --i + ++i - i--; // 0 - 0 + 1 - 1

console.log(i); //0
console.log(j); //0


console.log('-------------');


let i = 1, j = 2, k = 3;
let m = i-- - j-- - k--; // 1 - 2 - 3

console.log(i); //0
console.log(j); //1
console.log(k); //2
console.log(m); //-4


console.log('-------------');


let m = 0, n = 0
let p = --m * --n * n-- * m--; //-1 * -1 * -1 * -1

console.log(m); //-2
console.log(n); //-2
console.log(p); //1


console.log('-------------');


let d = 1.5, D = 2.5
console.log(d++ + ++D);//1.5 + 3.5 = 5


console.log('-------------');


console.log(++true); //SyntaxError: Invalid left-hand side expression in prefix operation
// console.log(12.33n); //SyntaxError: Invalid or unexpected token - A bigint literal must be an integer

console.log(7n / 2n); //3.5n then removes decimal = 3n


let pop = 10n;
console.log(++pop); //11n


console.log('-------------');


let bill = 1000;
//number to String
console.log(bill + ''); // "1000" String
console.log(typeof (bill+'')); //string
console.log(typeof (bill +``)); //string
console.log(typeof String(bill)); //string


console.log('-------------');


let marks = '100';
//string to number
console.log(+marks); //number 100
console.log(typeof +marks); //number
console.log(+marks + 20); //120


console.log('-------------');


let myNum = 1000n;
console.log(myNum + "" + 200); //"1000"+200 = "1000200"
console.log(typeof (myNum + "")); //string


console.log('-------------');


//string + anything ====> string
//anything + string ====> string
//string + string ====> string
//number + number ====> number
//bigint + bigint ====> bigint
//bigint + number ====> error