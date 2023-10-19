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

    /*receiveAttack(x, y) {
        const { board, newShip } = this.placeShips();
        console.log(missedShotsArray, 'this is missarray');
        if (board[x][y] === board[newShip.x][newShip.y]) {
            newShip.shipWasHit();
            newShip.shipWasSunk(newShip);
        } else {
            const missedShots = missedShotsArray.push(x, y)
            console.log(missedShots, 'these shots missed');
            return missedShots;
        }
    }*/

    allShipsSunk() {

    }
}
const shipsArray = []
const ship1 = new Ship(4, 0, false, 4, 0)
const ship2 = new Ship(4, 0, false, 3, 1)
shipsArray.push(ship1, ship2);
console.log(shipsArray, 'this is the array of ships');
const missedShotsArray = [];
const gameBoard1 = new gameBoard();
console.log(gameBoard1, 'this is gameboard1')
gameBoard1.placeShips(shipsArray);


export default gameBoard;