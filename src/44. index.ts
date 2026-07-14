let x: number = 10;
console.log(x); //10
console.log(typeof x); //number


let y: string = 'test';
console.log(typeof y); //string

let z: boolean = true;
console.log(typeof z); //boolean



function add(x: number, y: number): number {
    return x + y;
}

console.log(add(2, 3)); //5

// console.log(add(2, 'test')); //2test (It converts the code to JS at runtime)

function printing(): void {
    console.log('printing');
}

printing();


function getNumber(): number[] {
    return [1, 2, 3,];
}

console.log(getNumber());


let sub = (a: number, b: number): number => a - b;
console.log(sub(5, 3));