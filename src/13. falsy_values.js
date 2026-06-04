// Falsy Values: 8

// true: 1, "s", " ", [], {}, "0", "false"
// false: 0, -0, 0n, "", null, undefined, NaN

if (false) {
    console.log('hi');
}
else {
    console.log('bye');
}

if (-0) {
    console.log('hi');
}
else {
    console.log('bye');
}


// Unary Operator -> Convert to number
console.log(+true); //1

console.log(+""); //0