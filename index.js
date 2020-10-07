// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    
    speak() {
        return (`${this.name} says meow!`);
    }
}
let cat = new Cat("Sasha", "Female");
cat.speak();

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return (`${this.name} says woof!`);
    }
}
let dog = new Dog("Buzz", "Male");
dog.speak();

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === "Male") {
            return (`It's me! ${this.name}, the parrot!`);
        }
        else {
            return (`${this.name} says squawk!`);
        }
    }
}
let bird = new Bird("Pablo", "Male");
let bird2 = new Bird("Mable", "Female");
bird.speak();
bird2.speak();
// class Bird {
//     //...
// }