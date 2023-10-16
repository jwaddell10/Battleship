import ShipArrayManager from "./shiparraymanager.js";

class Ship {
    constructor(length, numberOfHits, isSunk, x, y) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
    }

    createShip() {
        const ship1 = new Ship(3, 0, false);
        const ship2 = new Ship(2, 0, false);
        const ship3 = new Ship(4, 0, false);
        const ship4 = new Ship(1, 0, false);
        shipArrayManger.addShip({ship1, ship2, ship3, ship4});
        console.log(shipArrayManger, 'this should have my ships');
        return shipArrayManger;
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

const shipArrayManger = new ShipArrayManager();
const admiral = new Ship();
admiral.createShip();
export default Ship