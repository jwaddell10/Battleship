class Ship {
    constructor(length, numberOfHits, isSunk) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
    }

    shipWasHit() {
        // if ship was hit
        this.numberOfHits++
        console.log(this.numberOfHits, 'this is the # of hits');
        return this.numberOfHits
    }

    shipWasSunk(Ship) {
        if (this.numberOfHits === this.length) {
            console.log(ship1, 'this ship is sunk');
            return true
        } else {
            console.log(Ship, 'this ship is not sunk');
            return false
        }
    }
}

const ship1 = new Ship(4, 0);
ship1.shipWasHit();
ship1.shipWasHit();
ship1.shipWasSunk();
ship1.shipWasHit();
ship1.shipWasHit();
ship1.shipWasSunk(ship1);

export default Ship; 