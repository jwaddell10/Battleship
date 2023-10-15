class Ship {
    constructor(length, numberOfHits, isSunk, x, y) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
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

export default Ship