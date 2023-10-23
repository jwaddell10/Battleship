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
            console.log('invalid attack');
            return; // Invalid attack, outside the 10x10 grid
        }
    }
    
    generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

    checkRepeatHits(x, y) {
        const hitsRepeat = shotsArray.includes((coordinates) => shotsArray === coordinates)
        const coordinates = [x, y]
        console.log(shotsArray, 'these are are shotsarray')
        console.log(hitsRepeat, 'this is hitsrepeat')
      }

    computerSendAttack(x, y) {
        shotsArray.push([x, y]);
        this.computerCheckAttack();
        this.checkRepeatHits(x, y)
        let computerAttack = gameboard1.board[x][y];
    }
}
const shotsArray = []
const computer1 = new Computer();
computer1.computerSendAttack(1, 2); 
computer1.computerSendAttack(1, 2); 