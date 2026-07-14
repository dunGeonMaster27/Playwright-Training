// async - await -> just a syntax on top of JS Promises to improve the
// callback hell and Promises

// async is used with function -> returns Promise
// await is used with steps



async function print() {
    console.log('printing');
}

print(); //printing



async function getNumber() {
    return 100;
}

getNumber().then(num => console.log(num)); //100

let t1 = await getNumber();
console.log(t1); //100


try {
    let t1 = await getNumber();
    console.log(t1);
}
catch (error) {
    console.log(error);
}
finally {
    console.log('Close the Browser');
}


// ----- coffee machine with async await -----



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


async function makeCoffee() {
    try {
        await startMachine();
        await boilwater();
        await addCoffeePowder();
        await pourInCup();
        await serveCoffee();
        console.log('Your coffee is ready....');
    }
    catch (error) {
        console.log(error);
    }
}

await makeCoffee();



//async await —-- 
// 1. if a function is wriiten with async — always returns a promise —-> call it using await
// 2. if a function is returning a Promise(resolve, reject) --> call it using with await
// 3. we should not write await without async function
// 4. async func —- its not mandatory to have await step —> will always return promise
// 5. if in a function, you have await steps --> then that function should be async