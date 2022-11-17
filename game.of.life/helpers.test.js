import {
    findValidNeighbors,
    countAliveNeighbors,
    willBeAlive,
    liveCycle,
} from './check';

describe('Given findValidNeighbors function', () => {
    describe('When the array is 3 x 3', () => {
        const array = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        const testValues = [
            [0, 0, 3],
            [0, 1, 5],
            [0, 2, 3],
            [1, 0, 5],
            [1, 1, 8],
            [1, 2, 5],
            [2, 0, 3],
            [2, 1, 5],
            [2, 2, 3],
        ];
        describe.each(testValues)(
            'And the coordinates are %i,%i',
            (fil, col, expected) => {
                test(`returned valid neighbors should be ${expected}`, () => {
                    // act
                    const result = findValidNeighbors(fil, col, array);
                    // assert
                    expect(result.length).toBe(expected);
                });
            }
        );
    });
});

describe('Given countAliveNeighbors function', () => {
    describe('When the array is 5 x 5', () => {
        const array = [
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ];
        const testValues = [
            [0, 0, 1],
            [0, 1, 3],
            [0, 2, 2],
            [1, 2, 4],
            [1, 3, 4],
            [1, 4, 3],
            [2, 2, 5],
            [3, 1, 4],
            [4, 2, 3],
        ];
        describe.each(testValues)(
            'And the coordinates are %i,%i',
            (fil, col, expected) => {
                test(`returned sum of alive neighbors should be ${expected}`, () => {
                    // act
                    const result = countAliveNeighbors(fil, col, array);
                    // assert
                    expect(result).toBe(expected);
                });
            }
        );
    });
});

describe('Given willBeAlive function', () => {
    describe('When the array is 5 x 5', () => {
        const array = [
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ];
        const testValues = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 2, 0],
            [1, 2, 1],
            [1, 3, 0],
            [1, 4, 1],
            [2, 2, 0],
            [3, 1, 0],
            [4, 2, 1],
        ];
        describe.each(testValues)(
            'And the coordinates are %i,%i',
            (fil, col, expected) => {
                test(`returned alive state should be ${expected}`, () => {
                    // act
                    const result = willBeAlive(fil, col, array);
                    // assert
                    expect(result).toBe(expected);
                });
            }
        );
    });
});

describe('Given liveCycle function', () => {
    describe('When the array is 3 x 3', () => {
        const array = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        const expected = [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1],
        ];
        test('result should be a new array 3 x 3', () => {
            // act
            const result = liveCycle(array);
            // assert
            expect(result).toEqual(expected);
        });
    });
});
