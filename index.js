class Cat{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    speak(){
        return `${this.name} says meow!`
    }

}

class Dog{
    constructor(name, gender){
        this.name = name ;
        this.gender = gender;
    }

    speak() {
        return `${this.name} says woof!`
    }


}

class Bird{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    speak() {
        return this.gender.toLowerCase() === 'male' ? (`It\'s me! ${this.name}, the parrot!`) : (`${this.name} says squawk!`) 
    }
}