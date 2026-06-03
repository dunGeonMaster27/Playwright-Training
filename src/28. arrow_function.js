// arrow function: anonymous function
// has no name
// () =>
// has no function keyword
// used in callback function


let print = () => console.log('Hello World');
print();


let pop = () => {
    console.log('Hello World');
}
pop();


//arrow function with params
let printInfo = (name) => console.log(name);
printInfo('Saket');


//without params (can be done if 1 param)
let printInfo = name => console.log(name);
printInfo('Saket');


// add two numbers and return
let add = (x, y) => x + y;
console.log(add(100, 200));



// give a string and convert it to Lower Case and then return
let convertToLowerCase = name => name.toLowerCase();
console.log(convertToLowerCase('TEST')); //test



let printEmpList = (...names) => {
    for (let i of names) {
        console.log(i);
    }
}

printEmpList('Naveen', 'Saket', 'Rakhi');


// arrow function with objects

let user = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

let printUserInfo = (userObj) => {
    for (let i in userObj) {
        console.log(`${i}: ${userObj[i]}`);
    }
};

printUserInfo(user);


let getNameAndSalary = ({ name, salary }) => {
    console.log(name, salary);
};

getNameAndSalary(user);





