/*The game loop should set up a new game by creating Players 
and Gameboards. For now just
 populate each Gameboard with predetermined coordinates.
 You can implement a system for allowing players to place their ships later.*/

import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderAttack } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from './computer.js'
import { Player } from './player.js'



function game() {

    //create the players
    const player = new Player('jon');
    const computer = new Computer();

    //create the ships
    const playerShips = 
    [
    new Ship(3, 0, false, 1, 3, 'horizontal'), 
    new Ship(4, 0, false, 5, 8, 'vertical'), 
    new Ship(3, 0, false, 3, 4, 'horizontal')
    ];
    
    const computerShips = 
    [
    new Ship(3, 0, false, 1, 3, 'horizontal'), 
    new Ship(4, 0, false, 2, 4, 'horizontal'), 
    new Ship(3, 0, false, 5, 9, 'vertical')
    ];

    //place ships on the board
    playerShipsArray.push(...playerShips);
    computerShipsArray.push(...computerShips);

    //create the gameboards for the players and place ships on the board
    const playerGameboard = new gameBoard();
    playerGameboard.placeShips(playerShips);
    const computerGameboard = new gameBoard();
    computerGameboard.placeShips(computerShips);
    console.log(computerGameboard.hitShots, 'this is computerboard outside attackscope')

    //render the board and ships onto the DOM
    renderBoard();
    renderComputerBoard();
    renderPlayerShips();
    renderComputerShips();
 
    //begin the game
    player.sendAttack();    

    player.setAttackHandler(function(x, y) {
        computerGameboard.receiveAttack(computerShips, x, y);
        for (let i = 0; i < computerShips.length; i++) { // Assuming a maximum of 3 coordinates per ship
            const shipElement = document.getElementById(`computership-${x}-${y}-${i}`);
            if (shipElement) {
                shipElement.style.backgroundColor = 'blue';
            }
        }
    });

}
game();

export { 
    game,
    //playerGameboard,
    //computerGameboard,
}