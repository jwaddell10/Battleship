import { shipsArray } from "./ship.js";
import { gameBoard } from './gameboard.js';

class Computer {
    
    constructor() {
        this.turn = false;
    }

    /*createComputerGameboard() {
        const computerGameboard = new gameBoard(); //create gameboard using gameboard class
        computerGameboard.placeShips(shipsArray); //place ships on computer gameboard
        console.log(shipsArray, 'these are the shipscomputer')
        return computerGameboard;
    }*/

    computerCheckAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }
    
    generateRandomNumber() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return { x, y }// The maximum is inclusive and the minimum is inclusive
      }

    checkRepeatHits(x, y, shotsArray) {
        const coordinates = [x, y];
        const hitsRepeat = shotsArray.some((coords) => coords[0] === x && coords[1] === y);

        if (hitsRepeat === true) {
            console.log('you hit this already');
        } else return coordinates
      }

    computerSendAttack(x, y) {
        shotsArray.push([x, y]);
        this.computerCheckAttack(x, y); // Provide x and y as arguments
        this.checkRepeatHits(x, y, shotsArray); // Pass shotsArray as an argument
        let computerAttack = this.board.board[x][y];
    }
}
const shotsArray = []

export default Computer