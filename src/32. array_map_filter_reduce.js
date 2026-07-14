// Map: Transform every element of array and returns new array
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

let num = [1, 2, 3, 4, 5];
let newArr = num.map(e => e * 2);

console.log(newArr); //[ 2, 4, 6, 8, 10 ]




// Filter: 
// Returns the elements of an array that meet the condition specified in a callback function.

let num = [1, 2, 3, 4, 5];
let newArr = num.filter(e => e > 3);

console.log(newArr); //[ 4, 5 ]


let final_arr = num
    .filter(e => e > 2)
    .filter(e => e % 2 === 1)
    .map(e => e * e);

console.log(final_arr); //[ 9, 25 ]




// Reduce: 
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


let numData = [10, 20, 30, 40];
let sum = numData.reduce((sum, n) => sum + n, 0)
console.log(sum); //100

