// Shallow Copy - ...
// Deep Copy - structuredClone


let user = {
    'name': 'Naveen',
    'age': 20,
    'salary': 12.33,
    'isActive': true
}

console.log(user);

// shallow copy using ... spread parameter(rest parameter)
let myUser = { ...user };
console.log(myUser);

console.log('----------');

user.age = 30;
console.log(user);
console.log(myUser);

console.log('----------');

// structured clone method (deep copy)

let newUser = structuredClone(user);
console.log(newUser);


// for nested objects

let customer = {
    name: 'Manish',
    age: 25,
    phone: '983492394923',
    salary: 12.33,
    isActive: true,
    address: {
        flat: 101,
        building: 'B Wing',
        city: 'Bengaluru',
        zip: 343244
    }
};


console.log(customer);

let newCustomer = { ...customer };
console.log(newCustomer);

console.log('----------');


newCustomer.address.flat = 102; //changes in copy object also
console.log(customer);
console.log(newCustomer);


console.log('----------');

let copyCustomer = structuredClone(customer);
console.log(customer);
console.log(copyCustomer);

console.log('----------');

copyCustomer.address.city = 'Pune'; //changes in copyCustomer object only
console.log(customer); //city - Bengaluru
console.log(copyCustomer); //city - Pune
console.log(newCustomer); //city - Bengaluru


