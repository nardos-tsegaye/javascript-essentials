class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(` ${this.make} ${this.model} (${this.year})`);
    }
}

class SportsCar extends Car {
    revEngine() {
        console.log('rvvvoooooom goes the dogde');
    }
}
let myFiat = new SportsCar('volvo', 'dodge', 2011);
myFiat.print();
myFiat.revEngine();