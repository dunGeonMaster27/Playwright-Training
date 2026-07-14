// Public(default) - Accessible in the same class, child class and outside the class
// Protected - Accessible in the same class, child class
// Private - Accessible in the same class

class Car {
    name: string = 'Honda';
    public age: number = 5;
    protected model: string = 'City';
    private number: string = '7890'
    readonly logo: string = 'VW';

    getCarInfo(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.model);
        console.log(this.number);
        console.log(this.logo);
        // this.logo = 'BMW'; // Read Only Property - unable to edit
    }
}


let c: Car = new Car();
c.getCarInfo();



class Audi extends Car {
    getAudiInfo(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.model);
        // console.log(this.number); // Private Property (Not accessible)
    }
}


class Cycle{
    getInfo(): void{
        let c: Car = new Car();
        console.log(c.name);
        console.log(c.age);
        // console.log(c.model); // Protected Property (Not accessible)
        // console.log(c.number); // Private Property (Not accessible)
    }
}

