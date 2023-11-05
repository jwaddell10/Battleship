import { shipsArray, Ship } from "./ship.js";
import { gameBoard } from './gameboard.js';

class Player {

    constructor(name) {
        this.name = name;
        this.turn = true;
    }

    /*createPlayerGameboard() {
        const playerGameboard = new gameBoard();
        playerGameboard.placeShips(shipsArray);
        return playerGameboard
    }*/

    checkAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }

    sendAttack() {
        const cell = document.querySelectorAll(`.computercell`);
        
        cell.forEach((item) => {
            item.addEventListener('click', (e) => {
                const attack = e.target.attributes.id
                const cellId = (`computercell`)
                console.log(attack, 'send attack worked')
                return attack;
            })
        })
    }
}

export { Player }