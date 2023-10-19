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

    placeShips() {
        const board = this.createBoard();
        const newShip = new Ship(4, 0, false, 0, 4);
        console.log(newShip, 'this should have my ship on gameboard');

        // place newShip on the board
        board[newShip.x][newShip.y] = newShip;
        console.log(board, 'this is board with ships');
        return { board, newShip };
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

const missedShotsArray = [];
const gameBoard1 = new gameBoard();
gameBoard1.placeShips();


export default gameBoard;