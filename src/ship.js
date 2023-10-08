class Ship {
    constructor(length, numberOfHits, isSunk) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
    }

    createShip() {
        const ship = new Ship();
        console.log(ship, 'this is a ship');
    }

    shipWasHit() {
        // if ship was hit
        this.numberOfHits++
        console.log(this.numberOfHits, 'this is the # of hits');
        return this.numberOfHits
    }

    shipWasSunk(Ship) {
        if (this.numberOfHits === this.length) {
            console.log(Ship, 'this ship is sunk');
            return true;
        } else {
            console.log(Ship, 'this ship is not sunk');
            return false;
        }
    }
}

const ship1 = new Ship(4, 0, false);
ship1.shipWasHit();
ship1.shipWasHit();

export default Ship
