/*The game loop should set up a new game by creating Players 
and Gameboards. For now just
 populate each Gameboard with predetermined coordinates.
 You can implement a system for allowing players to place their ships later.*/

import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from './computer.js'
import { Player } from './player.js'



function game() {

    //create the players
    const player = new Player('jon');
    const computer = new Computer()
    
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
    new Ship(3, 0, false, 6, 5, 'vertical')
    ];

    //place ships on the board
    playerShipsArray.push(...playerShips);
    computerShipsArray.push(...computerShips);

    //create the gameboards for the players and place ships on the board
    const playerGameboard = new gameBoard();
    playerGameboard.placeShips(playerShips);
    const computerGameboard = new gameBoard();
    computerGameboard.placeShips(computerShips);

    //render the board and ships onto the DOM
    renderBoard();
    renderComputerBoard();
    renderPlayerShips();
    renderComputerShips();

    //begin the game
    player.sendAttack();
    const x = player.sendAttack();
    computerGameboard.receiveAttack(computerShips, x)
      
    //how to send attack coordinates to opponents board???

    /*if (player.turn === true) {
        player.sendAttack();
    } else if (player.turn === false) {
        computer1.sendAttack()
    }*/
    
    
    //place ships
    //player clicks on attack location, unique id is stored
    //check for if attack coordinates matches ship coordinates
    //if so, record attack, change tile color, prevent another attack from happening
    //if not, record miss and prevent another attack from happening
}
game();


export { 
    game,
}