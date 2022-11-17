export function findValidNeighbors(fil = 0, col = 0, array = []) {
    // Para un array de 3 x 3
    // Posibles vecinos del item central (1,1)
    // [fil-1, col-1]    [(fil-1, col)]  [(fil-1, col+1)]
    // [(fil, col-1)]    [(fil, col)]    [(fil, col+1)]
    // [(fil+1, col-1)]  [(fil+1, col)]  [(fil+1, col+1)];
    const max = array.length - 1;
    const possiblePositions = [
        [fil - 1, col - 1],
        [fil - 1, col],
        [fil - 1, col + 1],
        [fil, col - 1],
        [fil, col + 1],
        [fil + 1, col - 1],
        [fil + 1, col],
        [fil + 1, col + 1],
    ];
    return possiblePositions.filter(
        (item) =>
            item[0] >= 0 && item[1] >= 0 && item[0] <= max && item[1] <= max
    );
}

export function countAliveNeighbors(fil = 0, col = 0, array = []) {
    const validPositions = findValidNeighbors(fil, col, array);
    return validPositions
        .map((item) => array[item[0]][item[1]])
        .reduce((a, b) => a + b);
}

export function willBeAlive(fil = 0, col = 0, array = []) {
    const countValidCells = countAliveNeighbors(fil, col, array);
    //let result;
    if (array[fil][col] === 1) {
        // starting alive
        return countValidCells > 2 && countValidCells <= 3 ? 1 : 0;
    } //else {
    // starting dead
    return countValidCells >= 3 ? 1 : 0;
    // }
    //return result;
}

export function liveCycle(array) {
    // localArray = array.map(item => [...item])
    const localArray = array.map((item, i) =>
        item.map((item, j) => willBeAlive(i, j, array))
    );
    return localArray;
}

