/* eslint-disable no-prototype-builtins */

/* eslint-disable no-unused-vars */
const animal = {
    life: true,
};

const human = {
    __proto__: animal,
    teeth: 32,
};

const pepe = {
    __proto__: human,
    age: 22,
};

console.log(pepe.age);
pepe.teeth = 31;
console.log(pepe.teeth);
console.log(pepe.__proto__.teeth);
console.log(pepe.life);

console.log(pepe.hasOwnProperty('teeth'));
console.log(pepe.hasOwnProperty('life'));

console.log(animal.__proto__);

animal.__proto__.taste = 'bacon';
const pizza = {};
console.log(pizza.taste);

console.log(Object.prototype.__proto__);
