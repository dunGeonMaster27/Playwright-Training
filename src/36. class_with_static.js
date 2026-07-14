class Employee {

    static compName = 'Google'; // stored in Common Memory Allocation (CMA) - static for all objects

    constructor(name, age, salary, isActive) {
        //setting global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }


    testing = () => {
        console.log(this.name, 'is testing');
    }

    add = (a, b) => {
        return a + b;
    }

    static billing() {
        console.log('same billing');
    }

}


let saket = new Employee('saket', 28, 200000, true);
console.log(Employee.compName);
Employee.compName = 'IBM';
console.log(Employee.compName);

Employee.billing();