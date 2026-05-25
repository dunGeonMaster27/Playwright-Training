console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

//2^53-1

console.log(9007199254740991 + 1); //9007199254740992

let num = 100n;
console.log(typeof num); //bigint
console.log(num); //100n

let n = BigInt(1000)
console.log(typeof n); //bigint
console.log(n); //1000n

// console.log(100n + 10); //TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(100n + 10n); //110n

console.log(10n * 2n); //20n

console.log(10n / 2n); //5n

console.log(+10n); //TypeError: Cannot convert a BigInt value to a number
console.log(-10n); //-10n

console.log(9427927921747297441n + 39243299834n); //9427927960990597275n

console.log("100n" + 10n); //100n10

// console.log(+"100n" + 10n); //TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(100n + ""); //"100"
console.log(typeof (100n + "")); //string


let phone = "9872938128";
// SSN, Aadhar, Credit Card, Debit Card, Fax ---- String

let ssn = "234932947392947392749";
let cc = "2132 3244 4677 8789"
let tel = "+101 (2324-9658-34)"

console.log(phone.length); //10

console.log(ssn.length); //21
console.log(cc.length); //19
console.log(tel.length); //19


