import { renderBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderComputerAttacks} from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from "./computer.js";
import { Player } from "./player.js";


//create the players (and computer)
const player = new Player("jon");
const computer = new Computer();


//create the ships
const playerShips = [
  new Ship(3, 0, false, 1, 3, "horizontal"),
  new Ship(4, 0, false, 5, 8, "vertical"),
  new Ship(3, 0, false, 3, 4, "horizontal"),
];

const computerShips = [
  new Ship(3, 0, false, 1, 3, "horizontal"),
  new Ship(4, 0, false, 2, 4, "horizontal"),
  new Ship(3, 0, false, 5, 9, "vertical"),
];

//create shipsarray to hold ships

playerShipsArray.push(...playerShips);
computerShipsArray.push(...computerShips);

//create gameboards and placeships on the board
const playerGameboard = new gameBoard();
playerGameboard.placeShips(playerShips);
const computerGameboard = new gameBoard();
computerGameboard.placeShips(computerShips);

//render board and ships to DOM

renderBoard();
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
      return;
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
