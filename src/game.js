import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderPlayerAttacks } from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from './computer.js'
import { Player } from './player.js'


const player = new Player('jon');
const computer = new Computer();

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

function game() {

    //create the players

    //create the ships

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

    let currentPlayer = player;
    function switchPlayerTurn() {
        if (currentPlayer === player) {
            currentPlayer = computer;
        } else {
            currentPlayer = player;
        }
    }

    function playerTurn() {
        player.sendAttack();  
        player.setAttackHandler(function(x, y) {
            computerGameboard.receiveAttack(computerShips, x, y);
            switchPlayerTurn();
            computerTurn();
        });
    }

    function computerTurn() {
        if (currentPlayer !== computer) {
            return;
        } else {
            const attackCoordinates = computer.computerSendAttack();
            computer.computerSendAttack();
            playerGameboard.receiveAttack(playerShips, attackCoordinates.x, attackCoordinates.y);
            renderPlayerAttacks();
            switchPlayerTurn();
        }
    }
    playerTurn();

    return {
        playerShipsArray,
        computerShipsArray
    }
}
game();

export {
    game,
    computer, 
    player,
 }