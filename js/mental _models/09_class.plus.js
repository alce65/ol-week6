/* eslint-disable no-unused-vars */
// JS 1995 - reserved word class
// ES6+ (2015) class

class Person {
    // Declaración de las propiedades
    name;
    age;
    // Declaración de propiedades privadas
    #isAlive;

    // Propiedades Estáticas

    static count = 0;
    static showCount = function () {
        console.log(`Las personas son ${Person.count} `);
    };

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#isAlive = true;
        this.foo = function () {};
        Person.count++;
    }

    greetings() {
        if (this.#isAlive) {
            console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
        } else {
            console.log('uffffffff');
        }
    }

    death() {
        this.#isAlive = false;
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

// console.log(p1.#isAlive); SyntaxError;

p1.death();
p1.greetings();

Person.showCount();
