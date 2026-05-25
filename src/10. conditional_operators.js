console.log(10 > 5); //true

console.log(true === true); //true


//if block

let age = 16;
if (age >= 16) {
    console.log('You are eligible for voting');
}
else {
    console.log('You are not eligible for voting');
}


if (true) {
    console.log('Hello');
}
else {//dead code/ unreachable code
    console.log('Bye');
}


// if - else if block

let browser = 'chrome';

if (browser === 'chrome') {
    console.log('launch chrome');
}
else if (browser === 'firefox') {
    console.log('launch firefox');
}
else {
    console.log('Please provide correct browser name');
}

