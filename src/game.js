import {
  renderPlayerBoard,
  renderComputerBoard,
  renderPlayerShips,
  renderComputerShips,
  renderComputerAttacks,
} from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from "./computer.js";
import { Player } from "./player.js";

const player = new Player("jon");
const computer = new Computer();

function createShips() {
  const playerShips = [
    new Ship(5, 0, false, undefined, undefined, "vertical"),
    new Ship(4, 0, false, undefined, undefined, "horizontal"),
    new Ship(3, 0, false, undefined, undefined, "vertical"),
    new Ship(2, 0, false, undefined, undefined, "horizontal"),
  ];

  const computerShips = [
    new Ship(5, 0, false, undefined, undefined, "vertical"),
    new Ship(4, 0, false, undefined, undefined, "horizontal"),
    new Ship(3, 0, false, undefined, undefined, "vertical"),
    new Ship(2, 0, false, undefined, undefined, "horizontal"),
  ];
  return {
    playerShips,
    computerShips,
  };
}
const { playerShips, computerShips } = createShips();

playerShipsArray.push(...playerShips);
computerShipsArray.push(...computerShips);

const playerGameboard = new gameBoard();
playerGameboard.placeShips(playerShips);
const computerGameboard = new gameBoard();
computerGameboard.placeShips(computerShips);

renderPlayerBoard();
renderComputerBoard();
renderPlayerShips(playerShipsArray);
renderComputerShips(computerShipsArray);

function game() {
  const restart = document.querySelector("#restartbutton");
  restart.addEventListener("click", () => {
    const { playerShips, computerShips } = createShips();

    console.log(
      playerGameboard.board,
      computerGameboard,
      "this is player, then computer before"
    );

    playerGameboard.clearBoard();
    computerGameboard.clearBoard();

    playerGameboard.placeShips(playerShips);
    computerGameboard.placeShips(computerShips);
    console.log(
      playerGameboard,
      computerGameboard,
      "this is player, then computer after"
    );
    renderPlayerShips(playerShips);
    renderComputerShips(computerShips);
  });

  let currentPlayer = player;

  function switchPlayerTurn() {
    if (currentPlayer === player) {
      currentPlayer = computer;
    } else {
      currentPlayer = player;
    }
  }

  function handlePlayerAttack() {
    const computerShipsSunk = computerGameboard.allShipsSunk(computerShips);
    const playerShipsSunk = playerGameboard.allShipsSunk(playerShips);

    const winText = document.createElement("div");
    winText.textContent = computerShipsSunk
      ? "Player Wins!"
      : playerShipsSunk
      ? "Computer Wins!"
      : "";

    if (winText.textContent) {
      winText.classList.add("win-text");
      const container = document.querySelector(".winnertextcontainer");
      container.appendChild(winText);

      const cells = document.querySelectorAll(".computercell");
      cells.forEach((cell) => {
        cell.removeEventListener("click", player.clickHandler);
      });
    }
  }

  function playerTurn() {
    handlePlayerAttack();
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

      let x, y; // Declare x and y here

      for (let i = 0; i < attackCoordinates.length; i += 2) {
        x = attackCoordinates[i];
        y = attackCoordinates[i + 1];
      }
      playerGameboard.receiveAttack(playerShips, x, y);
      renderComputerAttacks();

      switchPlayerTurn(); 
      handlePlayerAttack();
    }
  }
  playerTurn();

  return {
    playerShipsArray,
    computerShipsArray,
  };
}

game();

export {
  game,
  computer,
  player,
  computerGameboard,
  playerGameboard,
  computerShips,
  playerShips,
};
