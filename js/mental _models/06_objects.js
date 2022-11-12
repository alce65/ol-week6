// Patrón literal

const obj = {
    userName: 'Pepe',
    age: 23,
    greetings: function () {
        console.log(`Hola soy ${this.userName} y tengo ${this.age} años`);
    },
};

obj.greetings();

const obj2 = {
    userName: 'Juan',
    age: 24,
    greetings: function () {
        console.log(`Hola soy ${this.userName} y tengo ${this.age} años`);
    },
};

obj2.greetings();
