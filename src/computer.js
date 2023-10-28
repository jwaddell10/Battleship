import { shipsArray, Ship } from "./ship.js";
import { gameBoard } from './gameboard.js';

class Computer {
    constructor() {
        this.board = this.createComputerGameboard();
    }

    createComputerGameboard() {
        const computerGameboard = new gameBoard(); //create gameboard using gameboard class
        computerGameboard.placeShips(shipsArray); //place ships on computer gameboard
        return computerGameboard;
    }

    computerCheckAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }
    
    generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

    checkRepeatHits(x, y, shotsArray) {
        const coordinates = [x, y];
        const hitsRepeat = shotsArray.some((coords) => coords[0] === x && coords[1] === y);
      }

    computerSendAttack(x, y) {
        shotsArray.push([x, y]);
        this.computerCheckAttack(x, y); // Provide x and y as arguments
        this.checkRepeatHits(x, y, shotsArray); // Pass shotsArray as an argument
        let computerAttack = this.board.board[x][y];
    }
}
const shotsArray = []
const computer1 = new Computer();
console.log(computer1, 'this is comp1')
computer1.computerSendAttack(1, 2); 