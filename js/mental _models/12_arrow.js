function foo() {
    console.log('Soy line 2', this);
}
const fooArrow = () => {
    foo();
};

foo();
fooArrow();

setTimeout(foo, 0); // this en el execution scope
setTimeout(fooArrow, 0); // this en el lexical scope

new fooArrow();
