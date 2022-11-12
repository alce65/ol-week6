/* eslint-disable no-unused-vars */
// JS 1995 - reserved word class
// ES6+ (2015) class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isAlive = true;
        this.foo = function () {};
    }
    greetings() {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
    }
}

// Person.prototype.greetings = null

const p1 = new Person('Pepe', 33);
const p2 = new Person('Juan', 23);
p1.greetings();
p2.greetings = function () {
    console.log(`Hola me llamo ${this.name} y mi edad es ${this.age} años`);
};
p2.height = 180;
delete p2.isAlive;
p2.greetings();
p2.foo();

console.log(p1);
console.log(p2);
console.log(p2.constructor);
