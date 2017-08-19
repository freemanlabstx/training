class Car {
  constructor() {
    /*
     * Add the following attributes and their default values:
     *   - peopleInCar, which stores the number of people in the
     *     car. This should default to 0.
     *   - seats, which stores the number of available seats in the
     *     car. This should default to 4.
     *   - gas, which stores the percentage of gas available. This
     *     defaults to 100.
     *   - mileage, which stores the number of miles driven. This
     *     defaults to 0.
     */
  }

  /*
   * Define the drive function, which subtracts 1 from gas, and
   * adds 1 to mileage.
   */
  drive() {
  }

  addPerson() {
    if (this.peopleInCar == this.seats) {
      return false;
    } else {
      this.peopleInCar += 1;
      return true;
    }
  }

  removePerson() {
    if (this.peopleInCar > 0) {
      this.peopleInCar -= 1;
      return true;
    } else {
      return false;
    }
  }
}

class SportsCar extends Car {
  constructor() {
    super()
    /*
     * Define gas to 50.
     * Define seats to 2.
     */
  }

  /*
   * Consider the following functions, addPerson and removePerson.
   * If they simply call the "super" function, do they need to be
   * defined?
   *
   * Try removing them and re-running the tests to see if it makes
   * a difference.
   */
  addPerson() {
    super.addPerson();
  }

  removePerson() {
    super.removePerson();
  }

  /*
   * A sports car uses more gas than a normal car.
   * Define this function so that it subtracts 5 gas units instead
   * of 1.
   *
   * For a bonus assignment, consider adding additional logic, so that if
   * the amount of gas available is 0, the car is unable to drive
   * (return false).
   */
  drive() {
    super.drive();
  }
}

class ElectricCar extends Car {
  constructor() {
    super()
    /*
     * An electric car uses a battery instead of gas.
     * Define this.battery and default to 100.
     */
  }

  /*
   * An electric car uses a battery instead of gas.
   * Define this function so that it subtracts 1 battery unit instead
   * of a gas unit.
   */
  drive() {
    super.drive();
  }
}

// No changes are needed below this line.

const assert = require("assert");

var standard = new Car();
assert.equal(standard.peopleInCar, 0, "A Car should have 0 peopleInCar.");
assert.equal(standard.seats, 4, "A Car should have 4 seats.");
assert.equal(standard.gas, 100, "A Car should start with 0 gas.");
assert.equal(standard.mileage, 0, "A Car should start with 0 mileage.");

standard.addPerson()
assert.equal(standard.peopleInCar, 1, "Calling addPerson() should add 1 to peopleInCar.");
standard.addPerson()
assert.equal(standard.peopleInCar, 2, "Calling addPerson() should add 1 to peopleInCar.");
standard.addPerson()
standard.addPerson()
assert.equal(standard.peopleInCar, 4, "Calling addPerson() should add 1 to peopleInCar.");
standard.addPerson()
assert.equal(standard.peopleInCar, 4, "Calling addPerson() should add 1 to peopleInCar.");
standard.removePerson()
standard.removePerson()
standard.removePerson()
assert.equal(standard.peopleInCar, 1, "Calling removePerson() should subtract 1 from peopleInCar.");
standard.removePerson()
assert.equal(standard.peopleInCar, 0, "Calling removePerson() should subtract 1 from peopleInCar.");
standard.removePerson()
assert.equal(standard.peopleInCar, 0, "Calling removePerson() when no one is the car should do nothing.");

standard.drive()
assert.equal(standard.gas, 99, "Calling drive() should remove 1 from gas.");
assert.equal(standard.mileage, 1, "Calling drive() should add 1 to mileage.");

var sports = new SportsCar();
assert.equal(sports.gas, 50, "The SportsCar class should start with 50 gas.");
sports.drive()
assert.notEqual(sports.gas, 44,
  "The method drive() for SportsCar removed 6 gas, instead of 5. Note that since the parent class Car removes 1 gas during the drive() method, you should subtract 4 gas instead of 5.");
assert.equal(sports.gas, 45, "Calling drive() on SportsCar should remove 5 gas.");

var electric = new ElectricCar();
electric.drive()
assert.equal(electric.battery, 99, "Calling drive() on ElectricCar should remove 1 battery unit.");

// assert.notEqual(electric.gas, 99, "The electric car still has a gas value that is being used by `.drive`.");

console.log("Passed! :)");
