// Your code here

class Cat {
    constructor(name, sex) {  //accept the parameters name and sex and will store these properties
        this.name = name;
        this.sex = sex;
    }

    speak() { //create method speak
        return `${this.name} says meow!`   // returns "name says meow!"
    }
};

class Dog {
    constructor(name, sex) { //accept the parameters name and sex and will store these properties
        this.name = name;
        this.sex = sex;
    }

    speak() {  // cerate method speak
        return `${this.name} says woof!`  // returns name says woof!
    }
};


class Bird {
    constructor(name, sex){ //accept the parameters name and sex and will store these properties
        this.name = name;
        this.sex = sex;
    }
        speak() {  // create method speak
            if (this.sex == "male") {
                return `It's me! ${this.name}, the parrot!`
        } else {
                return `${this.name} says squawk!`
        }
    }
};