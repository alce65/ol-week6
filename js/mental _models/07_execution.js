function foo() {
    console.log('Soy line 2', this);
}

// Patrón de ejecución
// function

foo();

// Patrón de ejecución
// method

const obj = {
    name: 'Objeto',
    bar: foo,
};

obj.bar();

// Patrón de ejecución
// constructor

new foo();

// Patrón de ejecución
// apply/call

const obj2 = {
    name: 'Objeto dos',
};

foo.apply(obj2);
foo.call(obj2);
