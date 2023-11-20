import { renderPlayerBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderComputerAttacks} from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from "./computer.js";
import { Player } from "./player.js";


//create the players (and computer)
const player = new Player("jon");
const computer = new Computer();


//create the ships
const playerShips = [
  new Ship(5, 0, false, undefined, undefined, 'vertical'),
  new Ship(4, 0, false, undefined, undefined, 'horizontal'),
  new Ship(3, 0, false, undefined, undefined, 'vertical'),
  new Ship(2, 0, false, undefined, undefined, 'horizontal'),
];

const computerShips = [
    new Ship(5, 0, false, undefined, undefined, 'vertical'),
    new Ship(4, 0, false, undefined, undefined, 'horizontal'),
    new Ship(3, 0, false, undefined, undefined, 'vertical'),
    new Ship(2, 0, false, undefined, undefined, 'horizontal'),
];

//create shipsarray to hold ships

playerShipsArray.push(...playerShips);
computerShipsArray.push(...computerShips);

//create gameboards and placeships on the board
const playerGameboard = new gameBoard();
playerGameboard.placeShips(playerShips);
//playerGameboard.checkShips(playerShips);
const computerGameboard = new gameBoard();
computerGameboard.placeShips(computerShips);
//computerGameboard.checkShips(computerShips)

//render board and ships to DOM

renderPlayerBoard();
renderComputerBoard();
renderPlayerShips();
renderComputerShips();

//begin game
function game() {

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

    //function to pass attackCoords and handle execution of attack
    player.setAttackHandler(function (x, y) {
      computerGameboard.receiveAttack(computerShips, x, y);
      switchPlayerTurn();
      computerTurn();
    });
  }

  function computerTurn() {
    if (currentPlayer !== computer) {
      switchPlayerTurn();
    } else {
      const attackCoordinates = computer.computerSendAttack();
      playerGameboard.receiveAttack(playerShips, attackCoordinates.x, attackCoordinates.y,);
      renderComputerAttacks();
      switchPlayerTurn();
    }
  }
  playerTurn();

  return {
    playerShipsArray,
    computerShipsArray,
  };
}

game();

export { game, computer, player };
