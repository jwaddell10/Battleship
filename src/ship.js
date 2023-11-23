class Ship {
  constructor(length, numberOfHits = 0, isSunk = false, orientation) {
    this.length = length;
    this.numberOfHits = numberOfHits;
    this.isSunk = isSunk;
    this.x = this.generateCoordinate();
    this.y = this.generateCoordinate();
    this.orientation = orientation || (Math.random() < 0.5 ? 'horizontal' : 'vertical');
  }

  generateCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  wasHit() {
    this.numberOfHits++;
    console.log(`${this.numberOfHits} hits on the ship.`);
    return this.numberOfHits;
  }

  wasSunk() {
    if (this.numberOfHits === this.length) {
      this.isSunk = true;
    } else {
      this.isSunk = false;
    }
    return this.isSunk;
  }
}

const playerShipsArray = []
const computerShipsArray = []

export default Ship
export { playerShipsArray, computerShipsArray }