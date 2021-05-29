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

const Gagas = new Person("Gagas", 27);

Gagas.eat("hac");
Gagas.eat("hac");
Gagas.eat("hac");
Gagas.eat("hac");
Gagas.eat("hac");
Gagas.eat("hac");
Gagas.eat("hac");

// console.log(Gagas);

Gagas.poop();

// console.log(Gagas);

console.log(Gagas.toString());
