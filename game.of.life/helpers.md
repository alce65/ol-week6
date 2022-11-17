```js
import { findValidNeighbors } from './check';

describe('Given findValidNeighbors function', () => {
    describe('When the array is 3 x 3', () => {
        let array;
        beforeAll(() => {
            array = [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ];
        });
        describe('And the coordinates are 1,1', () => {
            test('returned valid neighbors should be 8', () => {
                // arrange
                const coordinates = [1, 1];
                // act
                const result = findValidNeighbors(...coordinates, array);
                // assert
                expect(result.length).toBe(8);
            });
        });
        describe('And the coordinates are 0,0', () => {
            test('returned valid neighbors should be 3', () => {
                // arrange
                const coordinates = [0, 0];
                // act
                const result = findValidNeighbors(...coordinates, array);
                // assert
                expect(result.length).toBe(3);
            });
        });
        describe('And the coordinates are 2,2', () => {
            test('returned valid neighbors should be 3', () => {
                // arrange
                const coordinates = [2, 2];
                // act
                const result = findValidNeighbors(...coordinates, array);
                // assert
                expect(result.length).toBe(3);
            });
        });
    });
});
```
