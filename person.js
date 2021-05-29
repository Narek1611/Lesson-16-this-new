class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(comparedObj) {
    if (this.age < comparedObj.age) {
      console.log(`${comparedObj.name} is older than me`);
    }
    if (this.age > comparedObj.age) {
      console.log(`${comparedObj.name} is younger than me`);
    }
    if (this.age === comparedObj.age) {
      console.log(`${comparedObj.name} is the same age as me`);
    }
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joe", 36);
const p3 = new Person("Lily", 24);

p2.compareAge(p3);
