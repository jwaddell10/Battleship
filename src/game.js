/*The game loop should set up a new game by creating Players 
and Gameboards. For now just
 populate each Gameboard with predetermined coordinates.
 You can implement a system for allowing players to place their ships later.*/

import { renderBoard, renderComputerBoard, renderPlayerShips } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import { shipsArray } from "./ship.js";
import { Computer, computer1 } from './computer.js'
import { Player, player1 } from './player.js'



function game() {
    renderBoard();
    renderComputerBoard();
    
    const gameBoards = {
        player1gameboard: new gameBoard(),
        computergameboard: new gameBoard()
    };
    renderPlayerShips();
    computer1.createComputerGameboard();

    player1.click();
    
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