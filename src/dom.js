import { computerShipsArray, playerShipsArray } from "./ship.js";
import { game, playerGameboard, computerGameboard, computer } from './game.js'
import Computer from './computer.js';

function renderBoard() {

    const boardContainer = document.querySelector('.boardcontainer');
    
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = `row-${i}`;
        boardContainer.appendChild(row);
    
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `cell-${i}-${j}`;
            row.appendChild(cell);
        }
    }
}

function renderComputerBoard() {
    const boardContainer = document.querySelector('.computerboardcontainer');
    
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('computerrow');
        row.id = `computerrow-${i}`;
        boardContainer.appendChild(row);
    
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('computercell');
            cell.id = `computercell-${i}-${j}`;
            row.appendChild(cell);
        }
    }
}

function renderPlayerShips() {
    playerShipsArray.forEach((ship) => {
        const x = ship.x;
        const y = ship.y;
        const length = ship.length;
        const orientation = ship.orientation;

        for (let i = 0; i < length; i++) {
            const shipElement = document.createElement('div');
            shipElement.classList.add('ship');
            shipElement.id = `ship-${x}-${y}-${i}`;

            // Calculate the position based on orientation
            if (orientation === 'horizontal') {
              //place ships in cells
                const cell = document.getElementById(`cell-${x}-${y + i}`);
                    if (cell) {
                        cell.appendChild(shipElement);
                    } else {
                    console.log(`Cell-${x}-${y} doesn't exist or is already filled`);
                    }
            } else if (orientation === 'vertical') {
                const cell = document.getElementById(`cell-${x + i}-${y}`);
                    if (cell) {
                        cell.appendChild(shipElement);
                    } else if (cell === false) {
                        return;
                    }
            }
        }
    });
}

function renderComputerShips() {
    computerShipsArray.forEach((ship) => {
        const x = ship.x;
        const y = ship.y;
        const length = ship.length;
        const orientation = ship.orientation;

        for (let i = 0; i < length; i++) {
            const shipElement = document.createElement('div');
            shipElement.classList.add('computership');
            shipElement.id = `computership-${x}-${y}-${i}`;

            // Calculate the position based on orientation
            if (orientation === 'horizontal') {
              //place ships in cells
                const cell = document.getElementById(`computercell-${x}-${y + i}`);
                    if (cell) {
                        cell.appendChild(shipElement);
                    } else {
                    console.log(`ComputerCell-${x}-${y} doesn't exist or is already filled`);
                    }
            } else if (orientation === 'vertical') {
                const cell = document.getElementById(`computercell-${x + i}-${y}`);
                    if (cell) {
                        cell.appendChild(shipElement);
                    } else if (cell === false) {
                        return;
                    }
            }
        }
    });
}

//take attackcoords, see if it matches a ship, if it doesn't, change style

function renderPlayerAttacks() {
    const attackCoordinates = computer.computerSendAttack();
    const cellId = `cell-${attackCoordinates.x}-${attackCoordinates.y}`;
    const cell = document.getElementById(cellId);
    const shipElement = document.querySelector('.ship')

    if (cell) {
        const matchingShip = playerShipsArray.find((ship) => ship.x == attackCoordinates.x && ship.y == attackCoordinates.y);

        console.log('Matching Ship:', matchingShip);

        if (matchingShip) {
            shipElement.style.backgroundColor = 'blue';
            console.log('It\'s a hit!');
            // Add logic for hit styling if needed
        } else {
            cell.style.backgroundColor = 'green';
        }
    }
}


export {
    renderBoard, 
    renderComputerBoard,
    renderPlayerShips,
    renderComputerShips,
    renderPlayerAttacks,
}