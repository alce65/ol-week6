/* eslint-disable @typescript-eslint/no-unused-vars */
const aDataNew: string[] = [];
const aDataNew1: Array<string> = [];

aDataNew.push('pepe');

// Tipar directamente sería poco reutilizable
// const obj1: { name?: string; age?: number } = {};

// Una opción sería usar tipos
// type Users = {
//     name?: string;
//     age?: number;
// };

interface Users {
    name?: string;
    age?: number;
}

const obj1: Users = {};
obj1.name = 'Pepe';
obj1.age = 22;
