// Objects: Non Primitive Data Type
// Collection of related data (key-value)

// user -> object reference variable name (stored in stack memory)
// object with all properties(key-value) (stored in heap memory)

// Stack stores primitive data types:
// 1. number
// 2. string
// 3. boolean
// 4. variables

// Heap stores non-primitive data types:
// 1. functions
// 2. objects
// 3. array


let user = {
    name: 'Vinay',
    age: 30,
    city: 'Pune',
    zip: 121212
};


console.log(user);
console.log(typeof user); //object

console.log(user.name); //dot notation
console.log(user['age']); //bracket notation



// let user = null;
// console.log(user.name); //TypeError: Cannot read properties of null (reading 'name')


// let user = undefined;
// console.log(user.name); //TypeError: Cannot read properties of undefined (reading 'name')




user.city = 'LA';
user.zip = 234214;
console.log(user);

user.phone = 9898723345;
console.log(user);

delete user.age;
console.log(user);

console.log('---------------------');


let customer = {
    name: 'Manish',
    age: 25,
    phone: '983492394923',
    salary: 12.33,
    isActive: true,
    address:{
        flat: 101,
        building: 'B Wing',
        city: 'Bengaluru',
        zip: 343244
    }
};

console.log(customer);
console.log(customer.name);
console.log(customer.isActive);
console.log(customer.address);
console.log(customer.address.building);


console.log('---------------------');


console.log(user);

// JSON Object to JSON String: Serialization (Marshelling)
let userJohn = JSON.stringify(user);
console.log(userJohn);
console.log(typeof userJohn); //string


// JSON String to JSON Object: Deserialization (Unmarshelling)
let userObj = JSON.parse(userJohn);
console.log(userObj);
console.log(typeof userObj); //object

//Can be used in api testing assertions
console.log(user.name === userObj.name); //true

console.log(user === userObj); //false
console.log(user == userObj); //false



let emp = {
    name: 'Vinay',
    age: 30,
    city: 'Pune',
    zip: 121212,
    devices: ['sim', 'iphone', 'macbook']
};

console.log(emp.devices.length); //3

let empString = JSON.stringify(emp);
console.log(empString);


const mem = process.memoryUsage();

console.log(object);



