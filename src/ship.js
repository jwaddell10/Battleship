class Ship {
    constructor(length, numberOfHits, isSunk, x, y, orientation) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
        this.orientation = orientation
    }

    wasHit() {
        // if ship was hit
        this.numberOfHits++
        console.log(this.numberOfHits, 'this is the # of hits');
        return this.numberOfHits
    }

    wasSunk() {
        if (this.numberOfHits === this.length) {
            console.log(Ship, 'this ship is sunk');
            this.isSunk = true;
        } else {
            console.log(Ship, 'this ship is not sunk');
            this.isSunk = false;
        } return this.isSunk;
    }
}

const playerShipsArray = []
const computerShipsArray = []

export default Ship
export { playerShipsArray, computerShipsArray }