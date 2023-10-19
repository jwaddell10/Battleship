// manages shipArray, can add/remove ships as needed

/* class ShipArrayManager {
    constructor() {
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
        return this.ships;
    }

    removeShip(ship) {
        const index = this.ships.indexOf(ship)
        if (index !== -1) {
            this.ships.splice(index, 1);
        }
    }
}*/

class Ship {
    constructor(length, numberOfHits, isSunk, x, y) {
        this.length = length;
        this.numberOfHits = numberOfHits;
        this.isSunk = isSunk;
        this.x = x;
        this.y = y;
    }

    /* createShips() {
        const ship1 = new Ship(3, 0, false, 0, 3);
        const ship2 = new Ship(2, 0, false, 1, 4);
        const ship3 = new Ship(4, 0, false, 2, 3);
        const ship4 = new Ship(1, 0, false, 4, 4);
        shiparraymanager.addShip({ship1, ship2, ship3, ship4});
        console.log(shiparraymanager, 'this is shiparraymanager');
        return { shiparraymanager, ship1, ship2, ship3, ship4 };
    }*/

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