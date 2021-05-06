// Your code here
class Cat{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`;
    }
}
class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`;
    }
}
class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    maleSpeak(){
        return `It's me! ${this.name}, the parrot!`;
    }
    femaleSpeak(){
        return `${this.name} says squawk!`;
    }
    speak() {
        let says = this.sex === "male" ? this.maleSpeak() : this.femaleSpeak();
        return `${says}`;
    }
}
