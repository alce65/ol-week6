import { liveCycle } from './helpers.js';

const initialBoard = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
];
console.clear();
console.log(initialBoard);
let board = initialBoard;

setInterval(() => {
    console.clear();
    board = liveCycle(board);
    console.log(board);
}, 1000);
