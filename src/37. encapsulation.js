// Encapsulation:

class Employee{

    name;
    age;
    #salary; // private variable of class


    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    // public getter and setter methods

    setSalary(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

}

let emp = new Employee('Tom', 20, 12.33);
console.log(emp.name, emp.age, emp.salary); // Tom 20 undefined

console.log(emp.getSalary()); //12.33

emp.setSalary(23.1);

console.log(emp.getSalary()); //23.1
