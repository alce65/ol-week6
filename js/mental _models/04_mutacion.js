/* eslint-disable no-unused-vars */
// Antes de ES6
console.log(a); // undefined
console.log(b); // Reference Error
var a = 23;
let b = 34;

if (a === 2) {
    // var a

    let b;
}

function name() {
    var a = 2;
    let b;
    console.log(a);
}
{
    let b;
}

const obj1 = {
    name: 'Pepe',
};

Object.freeze(obj1);

// obj1.name = "Juan" // error
