import { renderPlayerBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderComputerAttacks} from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from "./computer.js";
import { Player } from "./player.js";


//add restart button; 
//add message that player won or lost


//create the players (and computer)
const player = new Player("jon");
const computer = new Computer();

//create the ships
function createShips() {
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
  return {
    playerShips,
    computerShips,
  }
}
const { playerShips, computerShips} = createShips();


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
  renderPlayerShips(playerShipsArray);
  renderComputerShips(computerShipsArray);



//begin game
function game() {


  const restart = document.querySelector("#restartbutton");
  restart.addEventListener('click', () => {
    const { playerShips, computerShips } = createShips();
    playerGameboard.placeShips(playerShips)
    computerGameboard.placeShips(computerShips);
    // Reset playerShipsArray and computerShipsArray
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
    const shipsSunk = computerGameboard.allShipsSunk(computerShips) 
    const cells = document.querySelectorAll('.computercell')
      if (shipsSunk === true) {
        cells.forEach((cell) => {
          cell.removeEventListener('click', player.clickHandler)
        })
      }
  }

  function playerTurn() {
    player.sendAttack();

    //function to pass attackCoords and handle execution of attack
    player.setAttackHandler(function (x, y) {
      handlePlayerAttack();
      computerGameboard.receiveAttack(computerShips, x, y);
        switchPlayerTurn();
        computerTurn();
    });
  }

  function computerTurn() {
    handlePlayerAttack();
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

export { game, computer, player, computerGameboard, playerGameboard, computerShips, playerShips };
