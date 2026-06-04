// Array: collection of data
// data: similar data type = Homogenous
// data: different data type = Heterogenous

let num = [1, 2, 3, 4, 5];
console.log(num.length); //5
console.log(typeof num); //object

console.log(num[0]); //1
console.log(num[4]); //5
console.log(num[5]); //undefined
console.log(num[-1]); //undefined

console.log('--------------------');

console.log(num);
num[0] = 10;
console.log(num);

num[10] = 100;
console.log(num);

console.log(num[5]); //undefined
console.log(num.length); //11

console.log('--------------------');

let marks = [10, 20, 30, 40];
marks[-1] = 50; //Adds as a property of array (key and value pair)

console.log(marks);
console.log(marks[-1]); //50
console.log(marks.length); //4 (Properties are not counted in length)
console.log(marks[-2]); //undefined

marks[-100] = 51;
console.log(marks);
console.log(marks.length); //4

marks[100] = 52;
console.log(marks);
console.log(marks.length); //101 (with positive index, elements gets added in array with blanks in between)


// string array:
let products = ['laptop', 'mobile', 'tablet', 'monitor', 'keyboard'];
console.log(products);
console.log(products.length); //5

products[-1] = 'test';
console.log(products);
console.log(products.length); //5


// Employee Data
let emp = ['Vivek', 30, 23.44, true];
console.log(emp);
console.log(emp[0]); //Vivek


for (let i = 0; i <= emp.length - 1; i++){
    console.log(emp[i]);
}

console.log('--------------------');

for (let i = emp.length - 1; i >= 0; i--){
    console.log(emp[i]);
}


let pop = [];
console.log(pop);
console.log(pop.length); //0

pop[1000] = 1;
console.log(pop);
console.log(pop.length); //1001


