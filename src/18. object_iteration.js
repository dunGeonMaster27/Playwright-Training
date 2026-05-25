let user = {
    'name': 'Naveen',
    'age': 20,
    salary: 12.33,
    isActive: true
}

console.log(user);

// object iteration: for..in loop

for (let e in user) {
    console.log(e, ":" ,user[e]);
}

console.log('-----------');

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(Object.keys(user).length); //4


let o = {
    "ggh":"dasff"
}
console.log(o);
console.log(typeof o); //object


//JS Object to String
let userJson = JSON.stringify(user, null, 2);
console.log(userJson);
