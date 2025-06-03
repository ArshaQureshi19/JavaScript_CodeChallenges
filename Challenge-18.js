// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this; // enable chaining
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this; // enable chaining
  }
}

class EVCl extends CarCl {
  #charge; // private field

  constructor(make, speed, charge) {
    super(make, speed); // call parent constructor
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} charged to ${this.#charge}%`);
    return this; // enable chaining
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this; // enable chaining
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian
  .accelerate() // Rivian going at 140 km/h, charge 22%
  .brake() // Rivian going at 135 km/h
  .chargeBattery(90) // Charged to 90%
  .accelerate() // Rivian going at 155 km/h, charge 89%
  .brake(); // Rivian going at 150 km/h
