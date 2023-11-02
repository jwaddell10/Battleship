import { shipsArray, Ship } from "./ship.js";
import { gameBoard } from './gameboard.js';
import { clearLine } from "jest-util";

class Player {

    constructor() {
        this.board = this.createPlayerGameboard()
    }

    createPlayerGameboard() {
        const playerGameboard = new gameBoard();
        playerGameboard.placeShips(shipsArray);
        return playerGameboard
    }

    checkAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }

    sendAttack(x, y) {
        const cell = document.getElementById(`cell-${x}-${y}`)
        cell.addEventListener('click', () => {
            console.log(`cell-${x}-${y}`, 'this is cellxy')
        })
        this.checkAttack(x, y);
        let attack = this.board.board[x][y];
    }
}
const player1 = new Player();
console.log(player1.board, 'this is playerboard');
console.log(player1, 'this is player1')

export { Player, player1 };