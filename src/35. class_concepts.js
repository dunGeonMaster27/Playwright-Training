// class: category, template for the objects
// object: a physical entity - variables (properties), methods (actions)


class Employee {
    // class variables: global variables
    name;
    age;
    salary;
    isActive;

    // constructor: it will help us create an object and init global variables
    // only one constructor is alllowed
    constructor(name, age, salary, isActive) {
        //setting global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }


    // actions: methods
    coding() {
        console.log(this.name, 'is coding');
    }

    running = function () {
        console.log(this.name, 'is running');
    }

    testing = () => {
        console.log(this.name, 'is testing');
    }

    add = (a, b) => {
        return a + b;
    }

}




// create the object of class using new keyword
// create object -> constructor will be called


let saket = new Employee('saket', 28, 200000, true);

console.log(saket.name, saket.age, saket.salary, saket.isActive);
saket.coding();
console.log(saket.add(2, 3));



class User {

    //no need to create global variables

    // constructor: it will help us create an object and init global variables
    // only one constructor is alllowed
    constructor(name, age, salary, isActive) {
        //setting global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
}


let u1 = new User('u1', 12, 23.4, true);
console.log(u1);