class ShipArrayManager {
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
}

export default ShipArrayManager