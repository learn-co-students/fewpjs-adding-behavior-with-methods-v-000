// Your code here

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    // `${this.name} says meow!`; // I need the return statement, as this method/behavior is a function.
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === 'male') {
      return `It's me! ${this.name}, the parrot!`;
    }
    // Else, the bird is 'female'.
    return `${this.name} says squawk!`;
  }
}