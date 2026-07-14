// Promise: It has 3 states - 
// 1. Pending:
// 2. Resolved: Fulfilled - Return the resource (data)
// 3. Rejected - Error Reason


// Create a Promise: using Promise keyword

let pizzaPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Pizza');
    }
    else {
        reject('There is some error');
    }
});

pizzaPromise
    .then((result) => { console.log(result); })
    .catch((error) => { console.log(error); })
    .finally(() => { console.log('finally pizza promise is completed'); })


function getUserId(userId) {
    return new Promise((resolve, reject) => {
        console.log('Fetching the user data:', userId);
        setTimeout(() => {
            if (userId > 0) {
                let user = {
                    id: userId,
                    name: 'Someone',
                    age: 22
                }
                resolve(user);
            }
            else {
                reject('Invalid User ID');
            }
        }, 3000);
    })
}

getUserId(1)
    .then((user) => { console.log(user); })
    .catch((error) => { console.log(error); })
    .finally(() => { console.log('Closing the DB connection'); })


// ----- coffee machine with promise -----

function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Machine Started');
            resolve();
        }, 2000);
    })
}

function boilwater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Water Boiled');
            resolve();
        }, 2000);
    })
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. Coffee powder added');
            resolve();
        }, 2000);
    })
}

function pourInCup() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. Poured in Cup');
            resolve();
        }, 2000);
    })
}

function serveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('5. Coffee is served');
            resolve();
        }, 2000);
    })
}

startMachine()
    .then(() => boilwater())
    .then(() => addCoffeePowder())
    .then(() => pourInCup())
    .then(() => serveCoffee())
    .then(() => console.log('Your coffee is served...'))
    .catch((error) => console.log(error))


// callback hell -> promises -> async await




function getNumber() {
    return Promise.resolve(100);
}

console.log(getNumber()); //Promise { 100 }
getNumber().then(num => console.log(num)) //100



function getBrowserError() {
    return Promise.reject('Error Message');
}

getBrowserError().catch(error => console.log(error)) //Error Message






