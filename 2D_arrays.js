// 2D arrays

let num = [
    [1,2,3,4],
    [10,20,30,40],
    [100,200,300,400]
];
//3x4 matrix

console.log(num);
console.log(num[0][0]); // 1
console.log(num[0][3]); // 4
console.log(num[1][1]); // 20
console.log(num[2][2]); // 300
console.log(num[2][3]); // 400
console.log(num[2][30]); // undefined
// console.log(num[3][3]); // TypeError: Cannot read properties of undefined (reading '3')

console.log('--------------');

console.log(num.length); // 3 (row count)
console.log(num[0].length); // 4 (column count)

console.log('--------------');

for(let i=0; i<num.length; i++){
    for(let j=0; j<num[i].length; j++){
        process.stdout.write(num[i][j]+' ');
    }
    console.log();
}

console.log('--------------');

for(let i of num){
    for(let j of i){
        process.stdout.write(j+" ");
    }
    console.log();
}

console.log('--------------');

//jagged array (different number of rows and columns)
let data = [
    [1,2,3,4,5],
    [10,20,30],
    [100,200],
    [1000]
];

for(let i of data){
    for(let j of i){
        process.stdout.write(j+' ');
    }
    console.log();
}

console.log('--------------');

//reverse order using for..of loop

let products = ['macbook pro', 'imac', 'iphone', 'airpods', 'macbook air'];

let count = products.length - 1
for(let i of products){
    i = count
    console.log(products[i]);
    count--;
}

console.log('--------------');

//reverse order using for..in loop


let c = products.length - 1
for(let i in products){
    i = c
    console.log(products[i]);
    c--;
}


console.log('--------------');


let numArray = [1,2,3,4];
numArray[-1] = 7;
numArray[-100] = 77;

console.log(numArray);

console.log(Object.getOwnPropertyNames(numArray)); //shows properties of object