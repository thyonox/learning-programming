class Rabbit {}

const rabbit = new Rabbit()

console.log(typeof Rabbit);
console.log(typeof rabbit);

function Person(age, name){
    this.age = age;
    this.name = name;
}

function Student(){
    this.property = false
}

Student.prototype = new Person();

const s1 = new Student();

console.log(Person.prototype);
console.log(typeof Person.prototype);





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

/**
 * Represents a Dog, which extends the Animal class.
 * @class Dog
 * @extends Animal
 * @param {string} color - The color of the dog.
 * @param {string} name - The name of the dog.
 * @param {number} age - The age of the dog in years.
 */
class Dog extends Animal {
    constructor(color, name, age) {
        super(color, name)
        this.age = age
    }
}

const dog = new Dog("red", "Tom",20);

console.log(Dog.prototype.age);




