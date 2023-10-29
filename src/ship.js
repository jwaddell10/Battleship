class Ship {
    constructor(length, numberOfHits, isSunk, x, y, orientation) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
        this.orientation = orientation
    }

    shipWasHit() {
        // if ship was hit
        this.numberOfHits++
        console.log(this.numberOfHits, 'this is the # of hits');
        return this.numberOfHits
    }

    shipWasSunk() {
        if (this.numberOfHits === this.length) {
            console.log(Ship, 'this ship is sunk');
            this.isSunk = true;
        } else {
            console.log(Ship, 'this ship is not sunk');
            this.isSunk = false;
        } return this.isSunk;
    }
}

const shipsArray = []
const ship1 = new Ship(6, 0, false, 4, 0, 'horizontal')
const ship2 = new Ship(4, 0, false, 3, 1, 'vertical')
const ship3 = new Ship(3, 0, false, 5, 9, 'horizontal');
shipsArray.push(ship1, ship2, ship3);

export { shipsArray, Ship }