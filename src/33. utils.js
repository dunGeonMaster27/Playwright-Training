console.log('Hello'); // Gets exported by default

const PI = 3.14;

function driving() {
    console.log('driver is driving');
}

export function testing() {
    console.log('testing');
}


// We can only have one default function in JS file
// will not be part of object destructuring
export default function coding() {
    console.log('coding');
}
// let test = 'test';
// export default test; //SyntaxError: Duplicate export of 'default'


console.log('Bye');

export { PI, driving };