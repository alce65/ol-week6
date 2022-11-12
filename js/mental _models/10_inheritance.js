/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// JS 1995 - reserved word class
// ES6+ (2015) class

class Person {
    constructor(name, age, pet = null) {
        this.name = name;
        this.age = age;
        this.isAlive = true;
        this.foo = function () {};
        this.pet = pet;
    }
    greetings() {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
    }
}

class Pet {}

// Relación entre clases
// Asociación (has)
// Herencia (is)

const p1 = new Person('Pepe', 33, new Pet());

class Student extends Person {
    constructor(name, age, course = '', pet = null) {
        super(name, age, pet);
        this.course = course;
    }
    greetings() {
        super.greetings();
        console.log(`Estudio ${this.course}`);
    }
}

class Nini extends Student {
    constructor(name, age, course = '', pet = null) {
        super(name, age, pet);
        this.course = course;
    }
    greetings() {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
        console.log(`Ahora no estudio`);
    }
}

const s1 = new Student('Rosa', 32, 'Angular');
const s2 = new Student('Rosa', 23);

console.log(s1);
s1.greetings();

const n1 = new Nini('Raul', 19);
n1.greetings();
