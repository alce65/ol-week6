/* eslint-disable @typescript-eslint/no-unused-vars */

export const sample = () => {
    let foo1: string;
    foo1 = 'Pepe';
    foo1 = '22';
    let n: number;
    n = 2;
    n = 3;
    console.log(n + foo1);

    // Inferencia de tipos
    let x = 22;
    // x = true error de tipos
    x = 45;
    console.log(x);
};

const foo = (a: unknown): number => {
    // Aserción de tipos
    return (a as number) * 2;
};

const foo2 = (a: number | null): number => {
    // Programación defensive
    if (a === null) throw new Error();
    return a * 2;
};
