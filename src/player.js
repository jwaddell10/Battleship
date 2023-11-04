import { shipsArray, Ship } from "./ship.js";
import { gameBoard } from './gameboard.js';

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
        /*const cell = document.querySelectorAll(`#computercell-${x}-${y}`);
        console.log(cell, 'this is cell')
        cell.forEach((item) => {
            item.addEventListener('click', (e) => {
                const computerHit = e.target.attributes.id
                console.log(computerHit)
            })
        })*/
        this.checkAttack(x, y);
        let attack = this.board.board[x][y];
    }
}
const player1 = new Player();

export { Player, player1 };