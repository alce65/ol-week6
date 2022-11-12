/* eslint-disable no-unused-vars */
// Object.assign();

const human = {
    teeth: 32,
};

const pepe = Object.create(human);
pepe.age = 22;

console.log(pepe.teeth);
