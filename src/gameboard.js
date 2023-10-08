import Ship from './ship.js'

class gameBoard {
    constructor (shipLocation) {
        this.gameBoardArray = [];
        this.shipLocation = shipLocation;
    }

    createBoard() {
    let rows = 10;
    let columns = 10; 

    for (let x = 0; x < rows; x++) {
        this.gameBoardArray[x] = [];
        for (let y = 0; y < columns; y++) {
            this.gameBoardArray[x][y] = '.';
        }
    }
    console.log(this.gameBoardArray, 'this is gameboardarray from createboard');
    return this.gameBoardArray;
    }

    placeShips(ship, x, y, orientation) {
        const gameBoard1 = new gameBoard([0, 0]);
        gameBoard1.createBoard();
        console.log(gameBoard1, 'this is gameboard1 after create board');
        const ship1 = new Ship(4, 0, false);
        console.log(gameBoard1, 'this is gameboard after place ships hopefully');

        return gameBoard1;        
        // create a ship with Ship Class
        // using ship's length property, place it on grid index
        // have it take up as many spaces as ship's lengthx
        console.log(this.gameBoardArray, 'this is gamearray');
        console.log(this.gameBoardArray, 'this is a coordinate?');
    }
}

//gameboard

//generate random number

//needs to be able to place ships

//needs to have x/y coordinates

//needs to be able to hold hit data (receive attack), rceive pair of coordinates and determine if a ship is there

//should be able to keep track of all hits
const gameBoard1 = new gameBoard();
gameBoard1.placeShips();


export default gameBoard;