import { shipsArray, Ship } from "./ship.js";
import { gameboard1, gameBoard } from './gameboard.js';

class Computer {
    constructor(computer) {
        this.computer = computer;
    }

    createComputerGameboard() {
        const computerGameboard = new gameBoard(); //create gameboard using gameboard class
        computerGameboard.placeShips(shipsArray); //place ships on computer gameboard
        console.log(computerGameboard, 'this is computerboard');
    }

    computerCheckAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            console.log('invalid attack');
            return; // Invalid attack, outside the 10x10 grid
        }
        if (x === 1 || y === 2) {
            console.log('this worked')
        }
    }
    
    generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

      checkRepeatHits(x, y) {
        const hitsRepeat = shotsArray.includes((coordinates) => shotsArray === coordinates)
        const coordinates = [x, y];
        console.log(shotsArray, 'these are are shotsarray')
        console.log(coordinates, 'these are coordinates');
        console.log(hitsRepeat, 'this is hitsrepeat')
      }

    computerSendAttack(x, y) {
        const coordinates = [x, y]
        shotsArray.push(coordinates);
       // console.log(coordinates, 'these are the coordinates');
        this.computerCheckAttack();
        this.checkRepeatHits(x, y)
        //console.log(gameboard1, 'this is gameboard1computer')
        let computerAttack = gameboard1.board[x][y];
        //console.log(computerAttack, 'this spot was attacked computer');
    }
}
const shotsArray = []
const computer1 = new Computer();
computer1.computerSendAttack(1, 2); 
computer1.computerSendAttack(1, 2); 
computer1.computerSendAttack(computer1.generateRandomNumber(0, 9), computer1.generateRandomNumber(0, 9));
