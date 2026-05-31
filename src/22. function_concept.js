/**
 * This function is used to add two variables
 * @param {number} x 
 * @param {number} y 
 * @returns it returns addition of two numbers
 */
function addition(x, y) {
    return x + y;
}

let m1 = addition(10, 20); //call by value/ arguments
console.log(m1); //30


let m2 = addition(10, 'naveen');
console.log(m2); //10naveen


let m3 = addition('hello', 'naveen');
console.log(m3); //hellonaveen


// When the function is created, its stored in heap memory
// When we are calling the function, its called from stack memory(call stack)
// Memory gets allocated in stack while function is running,
// once the function is completely executed, the memory will be deallocated from stack
// As garbage collector only clears the heap memory