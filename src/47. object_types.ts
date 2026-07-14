// Contract/ Schema for the user with type keyword
type userType = {
    name: string,
    age: number,
    salary: number,
    isActive: boolean
}

let user: userType = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}



// Interface: Used to create/define the schema:
// We can use extend keyword to inherit other interface, but this can't be done with type

interface userSchema {
    name: string,
    age?: number,
    isActive?: boolean
}


let u1: userSchema = {
    name: 'Tom',
    age: 20,
    isActive: true
}


console.log('-------------------');

interface Company {
    compName: string
}

interface Employee {
    name: string,
    age: number,
    salary: number
}

interface Department extends Employee, Company {
    deptName: string,
    head?: string
}

let emp: Department = {
    name: 'Tom',
    age: 20,
    salary: 20,
    deptName: 'HR',
    head: 'Someone',
    compName: 'Google'
}


// interface with same names

interface Car {
    brand: string
}

interface Car {
    model: string
}

let bmw: Car = {
    brand: 'BMW',
    model: 'm320i'
}

console.log(bmw.brand, bmw.model); //BMW m320i

// Inheritence with type

type Person = {
    name: string
}

type Companies = Person & {
    company: string,
    count: number
}

let emp1: Companies = {
    company: 'IBM',
    count: 200,
    name: 'Tom'
}



type Status = "Pending" | "Out of delivery" | "Delivered";
let orderStatus: Status = "Pending";


//type with primitive data:
type userID = string | number;
type Age = number;

let id: userID = 'pop001';
let idl: userID = 9001;
let age: Age = 20;


//type with tuples:
type Point = [number, number, string];
let p: Point = [10.33, 43.44, "LA"];


//Real time example: in test automation:
//interface for the test config
interface TestConfig {
    testame: string,
    browser: "chrome" | "firefox" | "webkit",
    headless: boolean,
    retries?: number
}

// type for the status:
type TestStatus = "passed" | "failed" | "skipped";

//interface for the Test Result:
interface TestResult extends TestConfig {
    status: TestStatus, duration: number
}


let result: TestResult = {
    status: "passed",
    duration: 10,
    testame: "Login Test",
    browser: "chrome",
    headless: false,
    retries: 3
}

console.log(result);

interface Browser {
    browserName: string,
    version: number,
    coding(langName: string): void,
    add: (a: number, b: number) => number;
}


let chrome: Browser = {
    browserName: 'chrome',
    version: 134,
    coding(langName: string) {
        console.log(`${this.browserName} working with ${langName}...`);
    },
    add: (a: number, b: number): number => a + b
}


chrome.coding('Javascript');
console.log(chrome.add(2, 3));