let num = [10, 20, 30, 40, 50];
console.log(num.length); //property

// Mutator Methods - Changes the existing array

// Push - Add the element at the end of array
let e1 = num.push(100);
console.log(num);
console.log(e1); // Returns latest length of array


// Pop - Remove the last element of array
let e2 = num.pop();
console.log(num);
console.log(e2); // Returns removed element


// Unshift - Add element to beginning of array
let product = ['ipad', 'airpods'];
let c1 = product.unshift('macbook');
console.log(product);
console.log(c1); // Returns latest length of array


// Shift - Remove the first element of array
let c2 = product.shift();
console.log(product);
console.log(c2); // Returns removed element


// Splice: Add, remove, replace
// splice(StartIndex, deleteCount, item(s))
// Returns deleted elements

let product = ['ipad', 'airpods', 'imac', 'iphone'];

product.splice(0, 0, 'Mac', 'Tom');
console.log(product); //[ 'Mac', 'Tom', 'ipad', 'airpods', 'imac', 'iphone' ]


product.splice(0, 1, 'Canon');
console.log(product); //[ 'Canon', 'Tom', 'ipad', 'airpods', 'imac', 'iphone' ]

product.splice(0, product.length, 'Tag');
console.log(product); //[ 'Tag' ]

product.splice(product.length, 1, 'Cloth');
console.log(product); //[ 'Tag', 'Cloth' ]



// Slice:
// Returns a copy of a section of an array

let product = ['ipad', 'airpods', 'imac', 'iphone'];


let n1 = product.slice(1, 3);
console.log(n1); //[ 'airpods', 'imac' ]

let n2 = product.slice(2);
console.log(n2); //[ 'imac', 'iphone' ]

let n3 = product.slice(-2);
console.log(n3); //[ 'imac', 'iphone' ]


// Reverse:
// Reverses the elements in an array in place.

let product = ['ipad', 'airpods', 'imac', 'iphone'];
product.reverse();
console.log(product);


// IndexOf:
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let product = ['imac', 'airpods', 'ipad', 'iphone', 'imac'];
console.log(product.indexOf('test')); //-1

let k = product.indexOf('imac');
console.log(k); //0

console.log(product.indexOf('imac', k + 1)); //4



// LastIndexOf:
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

let product = ['imac', 'airpods', 'ipad', 'iphone', 'imac'];
console.log(product.lastIndexOf('imac')); //4


// Includes:
// Determines whether an array includes a certain element, returning true or false as appropriate.

let product = ['imac', 'airpods', 'ipad', 'iphone', 'imac'];
console.log(product.includes('imac')); //true
console.log(product.includes('test')); //false


// Join:
// Adds all the elements of an array into a string, separated by the specified separator string.

let product = ['imac', 'airpods', 'ipad', 'iphone', 'imac'];
console.log(product.join('')); //imacairpodsipadiphoneimac
console.log(product.join(' ')); //imac airpods ipad iphone imac



// toString:
// Returns a string representation of an array.

let product = ['imac', 'airpods', 'ipad', 'iphone', 'imac'];
console.log(product.toString()); //imac,airpods,ipad,iphone,imac


// at:
// Returns the item located at the specified index.

let product = ['imac', 'airpods', 'ipad', 'iphone'];
console.log(product.at(0)); //imac
console.log(product.at(-1)); //iphone
console.log(product.at(4)); //undefined


// forEach:
// Performs the specified action for each element in an array.

let product = ['imac', 'airpods', 'ipad', 'iphone'];
product.forEach((e) => {
    console.log(e.toUpperCase());
})
