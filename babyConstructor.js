function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.eat = function (food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };

  this.poop = function () {
    this.stomach.length = 0;
  };

  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }

  play() {
    console.log(`Playing with ${this.favoriteToy}`);
  }
}

const Gagasik = new Baby("Gagasik", 2, "kukla");

console.log(Gagasik);

Gagasik.play();
console.log(Gagasik.toString());
