import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from './computer.js'
import { Player } from './player.js'


function game() {

    //create the players
    const player = new Player('jon');
    const computer = new Computer();

    let currentPlayer = player;

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

    //render the board and ships onto the DOM
    renderBoard();
    renderComputerBoard();
    renderPlayerShips();
    renderComputerShips();
   
    //begin the game  

    function switchPlayerTurn() {
        if (currentPlayer === player) {
            currentPlayer = computer;
        } else {
            currentPlayer = player;
        }
    }
    switchPlayerTurn();
console.log(currentPlayer, 'this is currentplayer');
switchPlayerTurn();
console.log(currentPlayer, 'this is currentplayer')

    /*function playerTurn() {
        player.sendAttack();  
        player.setAttackHandler(function(x, y) {
            computerGameboard.receiveAttack(computerShips, x, y);
        });
        computerTurn();
    }

    function computerTurn() {
        computer.computerSendAttack();
        computer.setAttackHandler(function(x, y) {
            playerGameboard.receiveAttack(playerShips, x, y);
        })
    }
    playerTurn();*/
}
game();

export { 
    game,
    //playerGameboard,
    //computerGameboard,
}