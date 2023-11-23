import { renderPlayerBoard, renderComputerBoard, renderPlayerShips, renderComputerShips, renderComputerAttacks} from "./dom.js";
import { gameBoard } from "./gameboard.js";
import Ship, { computerShipsArray, playerShipsArray } from "./ship.js";
import Computer from "./computer.js";
import { Player } from "./player.js";


//make restart button delete everything within board container (even cells hit already)
//style playertext
//make it so if computer wins the game stops also
//improve styling generally   

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
        const winText = document.createElement('div');
        winText.textContent = 'Player Wins!';
        winText.classList.add('win-text'); // Add a class for styling if needed
    
        // Append the text to your HTML (replace 'container-id' with the actual container ID)
        const container = document.querySelector('.winnertextcontainer');
        container.appendChild(winText);
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
