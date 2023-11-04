/*The game loop should set up a new game by creating Players 
and Gameboards. For now just
 populate each Gameboard with predetermined coordinates.
 You can implement a system for allowing players to place their ships later.*/

import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { shipsArray } from "./ship.js";
import { Computer, computer1 } from './computer.js'
import { Player, player1 } from './player.js'



function game() {

    const gameBoards = {
        player1gameboard: new gameBoard(),
        computergameboard: new gameBoard()
    };
    //eventually use crate ship function here
    const ship1 = new Ship(6, 0, false, 1, 3, 'horizontal')
    const ship2 = new Ship(4, 0, false, 5, 8, 'vertical')
    const ship3 = new Ship(3, 0, false, 3, 4, 'horizontal');
    shipsArray.push(ship1, ship2, ship3);

    
    
    renderBoard();
    renderComputerBoard();
   
    
   
    renderPlayerShips();
    renderComputerShips();
    console.log(gameBoards.player1gameboard, 'this is gameboards')
    
    
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