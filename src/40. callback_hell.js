// callback hell - pyramid of doom....
function startMachine(callback) {
    setTimeout(() => {
        console.log('1. Machine Started');
        callback();
    }, 2000);
}

function boilwater(callback) {
    setTimeout(() => {
        console.log('2. Water Boiled');
        callback();
    }, 3000);
}

function addCoffeePowder(callback) {
    setTimeout(() => {
        console.log('3. Coffee powder added');
        callback();
    }, 4000);
}

function pourInCup(callback) {
    setTimeout(() => {
        console.log('4. Poured in Cup');
        callback();
    }, 2000);
}

function serveCoffee(callback) {
    setTimeout(() => {
        console.log('5. Coffee is served');
        callback();
    }, 1000);
}

// start the coffee preparation:
startMachine(() => {
    boilwater(() => {
        addCoffeePowder(() => {
            pourInCup(() => {
                serveCoffee(() => {
                    console.log('Your coffee is ready....enjoy it...');
                })
            })
        })
    })
});






