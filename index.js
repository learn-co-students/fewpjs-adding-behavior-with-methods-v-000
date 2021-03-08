class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
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
      switch(this.sex) {
        case "male":
          return `It's me! ${this.name}, the parrot!`;
        break;
        case "female":
          return `${this.name} says squawk!`;
        break;
      }
    }
  }