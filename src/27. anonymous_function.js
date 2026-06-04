// anonymous function: a function with no name
// expression name needs to be used

let test = function () {
    console.log('hello');
}

test(); //hello


let add = function (x, y) {
    return x + y;
}

let r1 = add(3, 4);
console.log(r1); //7

console.log(add.name); //add


// Advanced Version of anonymous function: Arrow Function =>
