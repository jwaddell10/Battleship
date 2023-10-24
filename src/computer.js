import { shipsArray, Ship } from "./ship.js";
import { gameboard1, gameBoard } from './gameboard.js';

class Computer {
    constructor(computer) {
        this.computer = computer;
    }

    /*createComputerGameboard() {
        const computerGameboard = new gameBoard(); //create gameboard using gameboard class
        computerGameboard.placeShips(shipsArray); //place ships on computer gameboard
        console.log(computerGameboard, 'this is computerboard');
    }*/

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
        console.log(coordinates, 'these are the coordinates');
        console.log(shotsArray, 'these are the shots array');
        console.log(hitsRepeat, 'this is hits repeat');
      }

    computerSendAttack(x, y) {
        shotsArray.push([x, y]);
        this.computerCheckAttack(x, y); // Provide x and y as arguments
        this.checkRepeatHits(x, y, shotsArray); // Pass shotsArray as an argument
        let computerAttack = gameboard1.board[x][y];
    }
}
const shotsArray = []
const computer1 = new Computer();
computer1.computerSendAttack(1, 2); 