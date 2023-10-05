import { Ship } from './ship.js';

console.log(Ship, 'this is ship from shipjs');

describe('the ship', () => {
    test('has length of 4', () => {
        expect(Ship.length).toBe(3);
    });
    test('has 0 hits', () => {
        expect(Ship.numberOfHits).toBeLessThan(4);
    });
})

describe('the ship', () => {
    test('has length of 4', () => {
        expect(Ship.length).toBe(4);
    });

    test('has 0 hits now', () => {
        expect(Ship.numberOfHits).toBe(0);
    });

    test('has 4 hits after being sunk', () => {
        Ship.shipWasSunk();
        expect(Ship.numberOfHits).toBe(4);
    });
});
