// Your code here
class Cat {
    constructor(name){
        this.name = name
    }
    speak() { //so take a look back at the reading, once we're in the class we dont need a key word of function
        return `${this.name} says meow!` //Remember string interpolation only uses backticks ``
        //also remember node.js
    }  
}

class Dog {
    constructor(name) {
        this.name = name
    }

    speak() {
        return `${this.name} says woof!`
    }  
}

class Bird {
    constructor(name,gender) {
        this.name = name
        this.gender = gender
    }

    speak() {
        if(this.gender == "male") {
            return `It's me! ${this.name}, the parrot!` 
        }
        else {
            return `${this.name} says squawk!`
        }
    }  
}