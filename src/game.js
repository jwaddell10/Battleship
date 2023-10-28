/*The game loop should set up a new game by creating Players 
and Gameboards. For now just
 populate each Gameboard with predetermined coordinates.
 You can implement a system for allowing players to place their ships later.*/

import { renderBoard, renderComputerBoard, renderPlayerShips } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import { shipsArray } from "./ship.js";


function game() {
    console.log('is this working');
    renderBoard();
    renderComputerBoard();
    
    const gameBoards = {
        player1gameboard: new gameBoard(),
        computergameboard: new gameBoard()
    };
    renderPlayerShips();
}


game();

export { 
    game,
}