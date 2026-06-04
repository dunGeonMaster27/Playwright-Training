let products = ['laptop', 'mobile', 'tablet', 'monitor', 'keyboard'];

console.log(products);
console.log(typeof products); //object

//1. index based for loop
for(let i = 0; i < products.length; i++){
    console.log(products[i]);
    if(products[i] === 'tablet'){
        console.log('-- found the product --');
        break;
    }
}



console.log('-----------------');

//2. for ..of loop (iterates on values)
for(let i of products){
    console.log(i);
}


console.log('-----------------');


//Reverse Order
for(let i = products.length-1; i>=0; i--){
    console.log(products[i]);
}


console.log('-----------------');


let empData = ['Tom', 34.44, true, 101, 'Pune']

empData[-1] = 100;
empData[-100] = 200;

console.log(empData);

for(let i of empData){
    console.log(i);
}


console.log('-----------------');

//for...in loop (index loop)
for(let i in products){
    console.log(i, '=', products[i]);
}
