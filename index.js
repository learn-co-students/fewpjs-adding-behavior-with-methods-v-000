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
        console.log("Test")
        if (this.sex === "male") {
            return `It's me! ${name}, the parrot!`

        } else{
            return `${name} says squawk!`
       }
    }
}
let test = new Bird('Test', 'male')
console.log("this.sex", this.sex)
console.log("bird.sex", bird.sex)
console.log("Bird.sex", Bird.sex)
