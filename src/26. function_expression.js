// function expression

// getData('test'); // ReferenceError: Cannot access 'getData' before initialization
// Function expression cannot be hoisted

let getData = function getUserDetails(name) {
    console.log('hello user details', name);
};

getData('test'); //hello user details test
// getUserDetails(); - ReferenceError: getUserDetails is not defined

console.log(typeof getData); //function
console.log(typeof getUserDetails); //undefined

console.log(getData.name); //getUserDetails

test(); //test
// Normal Function can be hoisted

function test() {
    console.log('test');
}


