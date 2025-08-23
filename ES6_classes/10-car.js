const BRAND = Symbol('brand');
const MOTOR = Symbol('motor');
const COLOR = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[BRAND] = brand;
    this[MOTOR] = motor;
    this[COLOR] = color;
  }

  // Getter for brand
  get brand() {
    return this[BRAND];
  }

  // Getter for motor
  get motor() {
    return this[MOTOR];
  }

  // Getter for color
  get color() {
    return this[COLOR];
  }

  // Clone method that returns a new instance
  cloneCar() {
    return new Car(this[BRAND], this[MOTOR], this[COLOR]);
  }
}
