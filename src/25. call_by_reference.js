// call by reference: Object Reference

let user = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

function getUserDetails(userObj) {
    console.log(userObj.name, userObj.age);
    console.log(userObj);
    userObj.name = 'Peter'; //This will change the name in original user object
    console.log(userObj);
}

getUserDetails(user); // call function by passing object reference
console.log(user);

// Object Destructuring Concept: getting some specific data from the object

function getSomeDetails({ name, age, salary }) {
    console.log(name, age, salary);
}

getSomeDetails(user);


function getActiveData({ isActive }) {
    console.log(isActive);
}

getActiveData(user);


let { salary, age } = user;
console.log(salary, age); //12.33 30

let { usersalary, userage } = user;
console.log(usersalary, userage); //undefined undefined


let { salary: userSalary, age: userAge } = user;
console.log(userSalary, userAge); //12.33 30

