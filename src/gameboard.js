class gameBoard {
    constructor (rows, columns, shipLocation) {
        this.rows = rows;
        this.columns = columns;
        this.shipLocation = shipLocation;
    }

    createBoard() {
    let gameBoardArray = [];
    let rows = 10;
    let columns = 10; 

    for (let i = 0; i < rows; i++) {
        gameBoardArray[i] = [];
        for (let j = 0; j < columns; j++) {
            gameBoardArray[i][j] = j;
        }
    }
    console.log(gameBoardArray);
    return gameBoardArray;
    }
}

//gameboard

//needs to be able to place ships

//needs to have x/y coordinates

//needs to be able to hold hit data (receive attack), rceive pair of coordinates and determine if a ship is there

//should be able to keep track of all hits
const gameBoard1 = new gameBoard(10, 10, [0, 0], [0, 1], [0, 2]);
gameBoard1.createBoard();
console.log(gameBoard1);

export default gameBoard;