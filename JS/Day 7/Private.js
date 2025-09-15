class Vehicle {
  #speed;
  #fuel;

  constructor(type, speed, fuel) {
    this.type = type;
    this.#speed = speed;
    this.#fuel = fuel;
  }

  get speed() {
    return this.#speed;
  }

  set speed(value) {
    if (value < 0) {
      console.log("Speed cannot be negative.");
    } else {
      this.#speed = value;
    }
  }

  get fuel() {
    return this.#fuel;
  }

  set fuel(value) {
    if (value < 0) {
      console.log("Fuel cannot be negative.");
    } else {
      this.#fuel = value;
    }
  }

  accelerate(amount) {
    this.speed = this.speed + amount;
    console.log(`${this.type} accelerated to ${this.speed} km/h`);
  }

  refuel(amount) {
    this.fuel = this.fuel + amount;
    console.log(`${this.type} refueled to ${this.fuel} liters`);
  }

  status() {
    console.log(
      `${this.type} is running at ${this.speed} km/h with ${this.fuel} liters of fuel.`
    );
  }
}

const car = new Vehicle("Car", 50, 20);
car.status();
car.accelerate(30);
car.refuel(10);


// Linked List With classes Push, Pop, Append, Prepend, InsertLast, InsertFirst, Find, Reverse