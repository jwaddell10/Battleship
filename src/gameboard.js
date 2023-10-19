import Ship  from './ship.js'

class gameBoard {
    constructor () {
        this.board = this.createBoard();
    }

    createBoard() {
    let board = [];
    let rows = 10;
    let columns = 10; 

    for (let x = 0; x < rows; x++) {
        board[x] = [];
        for (let y = 0; y < columns; y++) {
            board[x][y] = '.';
        }
    }
    return board;
    }

    placeShips(ships) {
       ships.forEach((ship) => {
        this.board[ship.x][ship.y] = ship;
       })
    }

    receiveAttack(ships, x, y) {
        let isHit = false; 
    
        ships.forEach((ship) => {
            if (this.board[x][y] === this.board[ship.x][ship.y]) {
                ship.shipWasHit();
                ship.shipWasSunk(ship);
                isHit = true; 
            }
        });
    
        if (!isHit) {
            // If there was no hit, record the miss
            missedShotsArray.push(x, y);
        }
    }

    addMissedShots() {
        if (receiveAttack === true) {
            console.log('the ship was hit');
        } else {
            return missedShotsArray
        }
    }

    allShipsSunk() {

    }
}
const shipsArray = []
const ship1 = new Ship(4, 0, false, 4, 0)
const ship2 = new Ship(4, 0, false, 3, 1)
const ship3 = new Ship(3, 0, false, 5, 9)
shipsArray.push(ship1, ship2, ship3);
console.log(shipsArray, 'this is the array of ships');
const missedShotsArray = [];
const gameBoard1 = new gameBoard();
console.log(gameBoard1, 'this is gameboard1')
gameBoard1.placeShips(shipsArray);
gameBoard1.receiveAttack(shipsArray, 4, 1);
console.log(missedShotsArray, 'this is missedshots');


export default gameBoard;