// Inheritance:
// Child class can access all properties from Parent class
// Parent cannot access anything from Child class

class Car{
    speed = 100;
    start() {
        console.log('Car - start');
    }
    stop() {
        console.log('Car - stop');
    }
    refuel() {
        console.log('Car - refuel');
    }
}


class BMW extends Car{
    speed = 200;

    //Method Overriding
    start() {
        console.log('BMW - start');
    }
    parking() {
        console.log('BMW - parking');
    }
    dashboard() {
        super.start(); //Car - start
        this.start(); //BMW - start
        console.log(this.speed); //200
        console.log(super.speed); //undefined (cannot access parent class variables using super keyword)
    }

}

let m240i = new BMW();
console.log(m240i.speed); //200 (overriden)
m240i.start(); // BMW - start (overriden)
m240i.refuel(); // Car - refuel (inherited)
m240i.parking(); // BMW - parking (individual)
m240i.dashboard();
