/* eslint-disable no-unused-vars */
// Patrón constructor -> constructora
function User(name, age) {
    this.name = name;
    this.age = age;
    this.isAlive = true;
    this.foo = function () {};
    console.log('Instancia completa');
}

User.bar = function () {
    console.log('Soy la clase Usuario');
};

User.prototype.greetings = function () {
    console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
};

const u1 = new User('Pepe', 33);
const u2 = new User('Juan', 23);
u1.greetings();
u2.greetings = function () {
    console.log(`Hola me llamo ${this.name} y mi edad es ${this.age} años`);
};
u2.height = 180;
delete u2.isAlive;
u2.greetings();
u2.foo();

console.log(u1);
console.log(u2);
console.log(u2.constructor);
User.bar();

Object.is();

const a = [];
a.map();
const b = 3;
Array.isArray(a);
Array.isArray(b);

// Inheritance

function Client(name, edad, account) {
    User.call(this, [name, edad]);
    this.account = account;
    Client.prototype.__proto___ = User.prototype;
    // Client.prototype = Object.create(User.prototype);
}

new Client();
