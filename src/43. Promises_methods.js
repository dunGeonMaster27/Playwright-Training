function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 2000);
    })
}

function getTrainerName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Naveen');
        }, 1000);
    })
}


function getResponseCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('200 OK');
        }, 100);
    })
}


// 1. Promise.all() ——> "All or nothing"….
// waits for ALL promises to succeed. If even one fails...the whole thing fails immediately...---fail-fast
// If all resolved -> gives all function results in a list
// If any one failed -> gives that function error
// If all failed -> gives error from function which failed first
// If all failed within same time -> gives error from function which is called first in Promise.all()

// Promise.all([getNumber(), getTrainerName(), getResponseCode()])
//     .then(result => console.log('All Resolved:', result))
//     .catch(error => console.log('It failed:', error))


// 2. Promise.race() --> who is finishing first either resolved or rejected will be returned

// Promise.race([getNumber(), getTrainerName(), getResponseCode()])
//     .then(result => console.log('Fastest Success:', result))
//     .catch(error => console.log('Fastest Failure:', error))


// 3. Promise.allSettled() --> Gives results of all functions
// wait for all the promises to finish then return all functions either resolve or rejected

// Promise.allSettled([getNumber(), getTrainerName(), getResponseCode()])
//     .then(result => console.log('Resolved:', result))
//     .catch(error => console.log('Failures:', error))


// 4. Promise.any() --> Gives the first resolved promise, ignores the failures
// If all resolved within same time -> gives result from function which is called first in Promise.any()
// If all promise fails, then gives all failures as AggregateError

// Promise.any([getNumber(), getTrainerName(), getResponseCode()])
//     .then(result => console.log('Fastest Resolved:', result))
//     .catch(error => console.log('Failures:', error))



