//while, do-while, for

// while:

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j >= 0) {
    console.log(j);
    j--;
}


let l = 1;
while (l <= 10) {
    console.log(l);
    if (l === 5) {
        console.log('Bye');
        break;
    }
    l++;
}


// for loop:

for (let m = 1; m <= 10; m++) {
    console.log(m);
}


//interview question - Infinite Loop
for (; ;) {
    console.log('Welcome');
}



// while vs for loop:

// while use cases - (when number of iterations are not fixed)
// 1. wait for element on page
// 2. wait for page loading
// 3. web table pagination
// 4. infinite scrolling    
// 5. go till march 2027
// 6. carousel


// for loop user cases - (when number of iterations are fixed)
// 1. month dropdown jan to dec: 1 to 12
// 2. day: 1 to 31
// 3. array iteration




console.log('hello');
process.stdout.write('hello'); // print on the same line
process.stdout.write('hello1');

let l = 1;
while (l <= 10) {
    process.stdout.write(l + '');
    l++;
}




// do-while loop:

// 1 to 10
let p = 1;
do {
    console.log(p);
    p++;
}
while (p <= 10);


// 10 to 1
let p = 10;
do {
    console.log(p);
    p--;
}
while (p >= 1)



// --------------Exercise--------------
// 1. Write a while loop to find the sum of all numbers from 1 to 100.

let i = 1;
let sum = 0;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);


// 2. Create a for loop to print the multiplication table of 5 (5x1=5, 5x2=10, ... 5x10=50).
for (let i = 1; i <= 10; i++) {
    console.log(`5x${i} =`, 5 * i);
}


// 3. Use a do-while loop to keep asking for user input until they type "quit".
let i = 'quit';
do {
    if (i === 'quit') {
        console.log('Its correct');
        break;
    }
}
while (i != 'quit');


// 4. Write a loop that counts how many vowels are in a given string.
let input = 'test';
let counter = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i of input) {
    if (vowels.includes(i)) {
        counter++;
    }
}
console.log(`Total count of vowels: ${counter}`);


// 5. Create a loop that reverses a number (e.g., 12345 becomes 54321).
let input = 12345;
let result = 0;
for (let i = input.toString().length - 1; i >= 0; i--) {
    result = result * 10 + +input.toString()[i];
}
console.log(result);