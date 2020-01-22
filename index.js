class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`
  }
}


class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
      return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    if (this.sex === 'male'){
       return `It\'s me! ${this.name}, the parrot!`
   }else  {
     return `${this.name} says squawk!`
   };
 }
}

//
// function speak(name, sex) {
//   if (name === Cat.name){
//     return `${this.name} says meow!`
//   } else if (name === Dog.name){
//       return `${name} says woof!`
//   }else if (name === Bird.name && sex === ){
//       return `It\'s me! ${name}, the parrot!`
//   }else if (name === Bird.name && sex === Bird.sex) {
//       return `${name} say squawk!`
//   } else {
//         return 'Empty action received.';
//   }
// }

// let speak = switch(name) {
//               case Cat.name:
//                 return `${name} says meow!`
//                 break;
//               case Dog.name
//                 return `${name} says woof!`
//                 break ;
//               default:
//                 return 'Empty action received.';
//               break;
// }
