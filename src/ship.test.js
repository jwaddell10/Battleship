import Ship from './ship.js';

console.log(Ship, 'this is ship from shipjs');

describe('the ship', () => {
    test('has length of 4', () => {
        const ship1 = new Ship(4);
        expect(ship1.length).toBe(4);
    });
    test('has 0 hits', () => {
        if (Ship.numberOfHits === 0)
        expect(Ship.numberOfHits).toBe(0);
    });
    test('ship was sunk', () => {
        if (Ship.length === Ship.numberOfHits) {
            expect(Ship.shipWasSunk).toBe(true)
        }
    })
})

