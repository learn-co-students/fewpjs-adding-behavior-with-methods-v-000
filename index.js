// Your code here
// Create classes Cat, Dog, and Bird
// Each of these classes will accept the parameters name and sex and will store those values as properties.
// has a class of cat
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    // For each class, create the method speak.
    // cat.speak() returns '[name]' says meow!
    speak() {
        return `${this.name} says meow!`;
    } 
}

// has a class of dog
class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    // For each class, create the method speak.
    //  dog.speak() returns '[name] says woof!'
    speak() {
        return `${this.name} says woof!`;
    }
}

// has a class of Bird
class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    // // For each class, create the method speak.
    speak() {
        // bird.speak() returns 'It's me! [name], the parrot!'
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`
        // bird2.speak() returns 'Squawk!'
        } else {
            return `${this.name} says squawk!`
       }
    }
}

