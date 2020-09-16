class Cat {
  constructor(name, type){
    this.name = name
    this.type = type
  }

  speak(){
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, type){
    this.name = name
    this.type = type
  }

  speak(){
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name,type){
    this.name = name
    this.type = type
  }

  speak(){
    return this.type == "male"? `It's me! ${this.name}, the parrot!` :
    `${this.name} says squawk!`
  }
}