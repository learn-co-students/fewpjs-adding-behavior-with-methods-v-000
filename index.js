class Dog {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	speak() {
		return `${this.name} says woof!`
	}
}

class Cat {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	speak() {
		return `${this.name} says meow!`
	}
}

class Bird {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	speak() {
		let statement;
		this.sex !== 'male' ? statement = `${this.name} says squawk!` : statement = `It\'s me! ${this.name}, the parrot!`
		return statement;
	}
}
