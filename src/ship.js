class Ship {
    constructor(length, numberOfHits, isSunk, x, y, orientation) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
        this.orientation = orientation
    }

    /*static createShip(length) {
        let ship = new Ship(length)
        console.log(ship, 'this is ship, should have properties')
        console.log(ship.properties, 'whats this?')
        shipsArray.push(ship);
        console.log(shipsArray, 'this is shipsarray')
    }*/

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

export default Ship
export { shipsArray }