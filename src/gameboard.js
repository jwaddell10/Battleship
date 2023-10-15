import Ship from './ship.js'

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
        console.log(newShip, 'this is newship');
        board[newShip.x][newShip.y] = newShip;
    
        console.log(board, 'this is with a ship')
        return { board, newShip };
    }

    receiveAttack(x, y) {
        const { board, newShip } = this.placeShips();

        if (board[x][y] === board[newShip.x][newShip.y]) {
            newShip.shipWasHit();
            console.log(newShip.numberOfHits, 'this should say 1')
        } else {
            const missedShotsArray = [];
            const missedShots = missedShotsArray.push(x, y)
            console.log(missedShotsArray, 'this is missedshotsarray');
            console.log(x, y, 'you missed');
            return missedShots;
        }
    }

    /* Gameboards should have a receiveAttack function that 
    takes a pair of coordinates, determines whether or not the 
    attack hit a ship and then sends the ‘hit’ function to the 
    correct ship, or records the coordinates of the missed shot.*/
}

const gameBoard1 = new gameBoard();
gameBoard1.placeShips();
gameBoard1.receiveAttack(0, 4);
gameBoard1.receiveAttack(1, 9);
gameBoard1.receiveAttack(2, 4);


export default gameBoard;