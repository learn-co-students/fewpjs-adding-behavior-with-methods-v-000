// Your code here

class Animal {
  constructor (name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} says meow!`
  }
}

class Dog extends Animal {
  speak () {
    return `${this.name} says woof!`
  }
}

class Bird extends Animal {
  speak() {
    return (this.sex === "male") ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
  }
}