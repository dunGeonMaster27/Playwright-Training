// == vs ===
// == loose equality: it will check only the value
// === strict equality: it will check value and type


console.log(10 == 10); //true
console.log(10 == '10'); //true

console.log(10 === 10); //true
console.log(10 === '10'); //false


//true = 1
//false = 0
console.log(true == 1); //true
console.log(true === 1); //false

console.log(false == 0); //true
console.log(false === 0); //false


console.log("" == 0); //true
console.log("" === 0); //false

console.log([] == 0); //true
console.log([] == "0"); //false
console.log([] === 0); //false

console.log(null == undefined); //true
console.log(null === undefined); //false (object vs undefined)

console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log([] == ""); //true
console.log([] === ""); //false

console.log([] == []); //false (memory address is different for both array)

console.log("" == ""); //true
console.log("" === ""); //true

console.log(NaN == null); //false
console.log(NaN == undefined); //false
console.log(NaN == 0); //false

console.log(typeof NaN); //number
