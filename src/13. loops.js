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

