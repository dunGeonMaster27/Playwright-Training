let emp = {
    name: 'Shree',
    age: 30,
    salary: 21.33,
    coding() {
        console.log(this.name, 'is coding');
    },
    testing() {
        console.log(this.age, 'is age');
        this.coding();
    },
    printData(a, b) {
        return a + b;
    },
    data: function () {
        console.log('this is from anonymous function');
    },
    reading: () => {
        // console.log(this.name); //TypeError: Cannot read properties of undefined (reading 'name') - Issue with arrow function
        console.log(emp.name);
    }
}


emp.coding();
emp.testing();
let r1 = emp.printData(10, 20);
console.log(r1);
emp.data();
emp.reading();

// this keyword is not allowed in an arrow function

// Object Destructuring

let user = {
    name: 'Tom',
    age: 30,
    address: {
        flat: 101,
        city: "LA",
        location: {
            lat: 232.2424,
            long: 13.444
        }
    }
}


let { name, address: { flat, city }, address: { location: { lat, long } } } = user;
console.log(name, flat, city, lat, long);