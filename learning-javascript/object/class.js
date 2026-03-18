class Rabbit {}

const rabbit = new Rabbit()

console.log(typeof Rabbit);
console.log(typeof rabbit);

function Person(age, name){
    this.age = age;
    this.name = name;
}

const teacher = new Person(18, 'Tom');
Person.color = 'red';
console.log(Person.color);
console.log(teacher.color);

class Animal {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(color, name, age) {
        super(color, name)
        this.age = age
    }
}

const dog = new Dog("red", "Tom",20);

console.log(Dog.prototype.age);




