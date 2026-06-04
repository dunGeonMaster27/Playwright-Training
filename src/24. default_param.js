// default param - with default value
function greet(name = 'Naveen') {
    console.log('hello', name);
}

greet(); //hello Naveen
greet('Saket'); //hello Saket


function add(a, b = 10) {
    console.log(a + b);
}


add(5); //15
add(5, undefined); //15 (undefined will trigger the default value)
add(5, null); //5 (null will not trigger default value, it passes value as null)
