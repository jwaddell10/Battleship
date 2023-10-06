import Ship from './ship.js'

class gameBoard {
    constructor () {
        this.gameBoardArray = [];
    }

    createBoard() {
    let rows = 10;
    let columns = 10; 

    for (let x = 0; x < rows; x++) {
        this.gameBoardArray[x] = [];
        for (let y = 0; y < columns; y++) {
            this.gameBoardArray[x][y] = y;
        }
    }
    console.log(this.gameBoardArray, 'this is gameboardarray');
    return this.gameBoardArray;
    }

    placeShips() {
        const ship1 = new Ship(4, 0, false);
        ship1.push(gameBoardArray);
        console.log(gameBoardArray);
        console.log(ship1);
    }
}

//gameboard

//needs to be able to place ships

//needs to have x/y coordinates

//needs to be able to hold hit data (receive attack), rceive pair of coordinates and determine if a ship is there

//should be able to keep track of all hits
const gameBoard1 = new gameBoard();
gameBoard1.createBoard();
gameBoard1.placeShips();
console.log(gameBoard1, 'this is gameboard1');

export default gameBoard;