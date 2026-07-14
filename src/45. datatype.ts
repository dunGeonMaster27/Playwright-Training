let name: string = 'Saket';
let age: number = 20;
let isActive: boolean = true;
let noValue: null = null;
let nothing: undefined = undefined;
let bignum: bigint = 23213123n;

let data: any = 'test';
console.log(typeof data); //string
data = 2323;
console.log(typeof data); //number

let val: unknown = 'test';
// val.toUpperCase(); // Compile Time Error as val is of unknown type

if (typeof val === 'string') {
    val.toUpperCase();
}


// void: type of function which doesn't return any value
function clickOnElement(element: string): void {
    console.log('click on element', element);
}

clickOnElement('loginButton');


// never: function never returns (throws the error or infinite loop)
function throwError(msg: string): never {
    throw new Error(msg);
}

// throwError('Element not found....');



// Array: this is dynamic array

let score: number[] = [1, 2, 3];
let browser: string[] = ['chrome', 'brave', 'safari'];
let browsers: Array<string> = ['chrome', 'brave', 'safari'];

let empID: (number | string)[] = ['test', 124];


// Tuple: this is static array, fixed length, fixed type per position 
let user: [string, number, boolean] = ['test', 2, false];


// Object:
let userObj: { name: string | number, age: number } = {
    name: 'Saket',
    age: 20
}

// Enum: Collection of Constant Values

enum Status {
    Open,
    InProgress,
    Closed
}
console.log(Status);
console.log(Status.InProgress); //1


enum Browsers {
    ch = 'chrome',
    fx = 'firefox'
}
console.log(Browsers.ch); //chrome


// Union Type: | (or condition for data type)
let userId: number | string = 'test101';


// Literal Types: Exact Values only
let httpCode: 200 | 400 | 500;

httpCode = 200;
// httpCode = 100; //Type '100' is not assignable to type '200 | 400 | 500'



// Function
function getNumber(): number {
    return 100;
}

let add = (x: number, y: number): number => x + y;


// Promise
function getData(): Promise<string | number> {
    return new Promise((resolve, reject) => {
        let flag: boolean = true;
        if (flag) {
            resolve(100);
        }
        else {
            reject('error');
        }
    })
}


console.log(await getData());            