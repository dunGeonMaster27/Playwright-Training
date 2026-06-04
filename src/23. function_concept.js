/**
 * This function is used to add two variables
 * @param {number} x 
 * @param {number} y 
 * @returns it returns addition of two numbers
 */
function addition(x, y) {
    return x + y;
}
// Parameters are variables in the function definition. Arguments are actual values passed when calling the function.

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
// As garbage collector only clears the heap memory, this memory deallocates automatically in stack memory


// JavaScript uses two types of memory: 

// - Stack: Stores primitive values(numbers, strings, booleans) and function call frames.
// Works as LIFO (LastIn, First Out).

// - Heap: Stores objects, arrays, and functions.
// These are reference types-- the variable holds a reference(pointer) to the data in heap.
// When a function is called, a new frame is pushed onto the call stack.
// When the function finishes(returns), the frame is popped off the stack.
// If too many functions call each other without returning(infinite recursion), 
// you get a 'Maximum call stack size exceeded' error.
