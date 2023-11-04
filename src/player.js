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
        this.checkAttack(x, y);
        let attack = this.board.board[x][y];
    }
    
    click() {
        const cell = document.querySelectorAll(`.computercell`);
        cell.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log(e.target, 'this is etarget')
            })
        })
    }
}
const player1 = new Player();
console.log(player1.board, 'this is playerboard');
console.log(player1, 'this is player1')

export { Player, player1 };