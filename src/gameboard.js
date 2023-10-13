import Ship from './ship.js'

class gameBoard {
    constructor () {
        this.board = [];
    }

    createBoard() {
    let board = []
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
        console.log(newShip, 'this is newship');
        board[newShip.x][newShip.y] = newShip;
        /* for (let i = 0; i < newShip.length; i++) {
            let x = 0
            let y = 1;
            board[x][y + 1] = newShip;
        }*/
         console.log(board, 'this is with a ship')
        // create a ship with Ship Class
        // create a board with gameboard class
        // using ship's length property, place it on grid index
        // have it take up as many spaces as ship's lengths
    }

    receiveAttack(x, y) {
        console.log(board, 'this is board');
    }

    /* Gameboards should have a receiveAttack function that 
    takes a pair of coordinates, determines whether or not the 
    attack hit a ship and then sends the ‘hit’ function to the 
    correct ship, or records the coordinates of the missed shot.*/
}

//gameboard

//generate random number

//needs to be able to place ships

//needs to have x/y coordinates

//needs to be able to hold hit data (receive attack), rceive pair of coordinates and determine if a ship is there

//should be able to keep track of all hits
const gameBoard1 = new gameBoard();
gameBoard1.placeShips();
// gameBoard1.receiveAttack();


export default gameBoard;