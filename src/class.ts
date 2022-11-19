/* eslint-disable no-unused-vars */
// JS 1995 - reserved word class
// ES6+ (2015) class

interface Animal {
    death: () => void;
}

class Person implements Animal {
    // Propiedades Estáticas

    static count = 0;
    static showCount = function () {
        console.log(`Las personas son ${Person.count} `);
    };

    // Declaración de propiedades privadas
    #isAlive;
    // private isAlive

    // Declaración de las propiedades
    // name: string;
    // age: number;
    constructor(public name: string, public age: number) {
        // this.name = name;
        // this.age = age;
        this.#isAlive = true;
        Person.count++;
    }

    greetings() {
        if (this.#isAlive) {
            console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
        } else {
            console.log('Me he muerto, uf');
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
// p2.height = 180; daría error en TS
// delete p2.isAlive; v
p2.greetings();

console.log(p1);
console.log(p2);
console.log(p2.constructor);

// console.log(p1.#isAlive); SyntaxError;

p1.death();
p1.greetings();

Person.showCount();

export class Student extends Person {
    constructor(
        name: string,
        age: number,
        public course = '',
        public pet: string | null = null
    ) {
        super(name, age);
    }
    greetings() {
        super.greetings();
        console.log(`Estudio ${this.course}`);
    }
}
