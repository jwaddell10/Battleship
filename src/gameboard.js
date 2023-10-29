import { shipsArray, Ship }  from './ship.js'
import { player1, Player } from './player.js'

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
        const { x, y, orientation } = ship;
        
            if (orientation === 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    this.board[ship.x][ship.y + i] = ship;
                }
        
            } else if (orientation === 'vertical') {
                for (let i = 0; i < ship.length; i++) {
                    this.board[ship.x + i][ship.y] = ship;
                }
            }
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
            console.log(missedShotsArray, 'this is missed shots')
        }
    }

    allShipsSunk(ships) {
        let allShipsSunk = false;
        
        const shipsSunk = ships.filter((ship) => ship.shipWasSunk() === true)

        if (shipsSunk.length !== ships.length) {
            allShipsSunk = false; 
            return allShipsSunk
        } else if (shipsSunk.length === ships.length) {
            allShipsSunk = true;
            return allShipsSunk
        }
    }
}
const missedShotsArray = [];

export { gameBoard }