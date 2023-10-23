import { shipsArray, Ship } from "./ship.js";
import { gameboard1, gameBoard } from './gameboard.js';

class Player {
    //attack method
    //
    constructor(player) {
        this.player = player;
    }

    checkAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            console.log('invalid attack');
            return; // Invalid attack, outside the 10x10 grid
        }
    }

    sendAttack(x, y) {
        //attack must be on the board--check if legal
        //check to see if it's been done already
        //
        this.checkAttack();
        let attack = gameboard1.board[x][y];
        console.log(attack, 'this spot was attacked');
    }
}
const player1 = new Player();
player1.sendAttack(1, 0);

export { player1, Player };