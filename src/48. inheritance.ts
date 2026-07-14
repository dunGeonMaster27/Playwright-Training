class Car {
    start(): void {
        console.log('car -- start');
    }
    stop(): void {
        console.log('car -- stop');
    }
    refuel(): void {
        console.log('car —- refuel');
    }
}

class BMW extends Car {
    override start(): void {
        console.log('bmw -- start');
    }
    autoParking() {
        console.log('bmw -- auto parking');
    }
}


let bmw: BMW = new BMW();
bmw.start(); //bmw -- start
bmw.stop(); //car -- stop
bmw.refuel(); //car —- refuel
bmw.autoParking(); //bmw -- auto parking
 
console.log('---------');

let myCar: Car = new Car();
myCar.start(); //car -- start
myCar.stop(); //car -- start
myCar.refuel(); //car —- refuel

console.log('---------');

// Top Casting:
// Child class object can be referred by parent class reference variable

let c: Car = new BMW();
c.start(); //bmw -- start
c.stop(); //car -- stop
c.refuel(); //car —- refuel
// c.autoParking(); // Due to reference type check, child methods cant be used by parent

// Down Casting:
// Parent class object can be referred by child class reference variable 

// let b: BMW = new Car(); // Its giving an error as every car is not a BMW

