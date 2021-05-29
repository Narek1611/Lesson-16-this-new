class Car {
  constructor(name, milesPerGallon) {
    this.name = name;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    this.tank += gallons;
  }

  drive(distance) {
    let possibleDistance = this.tank * this.milesPerGallon;
    if (distance <= possibleDistance) {
      this.odometer += distance;
      this.tank = this.tank - distance / this.milesPerGallon;
    } else {
      this.odometer += possibleDistance;
      this.tank = 0;
      console.log(`I ran out of fuel at ${this.odometer} miles`);
    }
  }
}

const bmw = new Car("bmw", 20);

bmw.fill(5);
bmw.drive(20);
bmw.drive(70);
bmw.drive(10);
bmw.drive(10);
bmw.fill(4);
bmw.drive(120);
// bmw.drive(10);

console.log(bmw);
