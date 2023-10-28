import { gameBoard } from "./gameboard.js";
import { Ship, shipsArray } from "./ship.js";

function renderBoard() {
    //create rows
    //cells for each row
    //they need unique identifiers, classes, target ids so they can be selected
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
    shipsArray.forEach((ship) => {
        const x = ship.x;
        const y = ship.y;

        const shipElement = document.createElement('div');
        shipElement.classList.add('ship');
        shipElement.id = `ship${x}-${y}`;
        console.log(shipElement, 'this is shipele');

        //put shipelement in proper cell
        const cell = document.getElementById(`cell-${x}-${y}`);
        console.log(cell, 'this is cell');

        if (cell) {
            cell.appendChild(shipElement);
        } else {
            console.log(`Cell-${x}-${y} doesn't exist or is already filled`);
        }
    })
}

export {
    renderBoard, 
    renderComputerBoard,
    renderPlayerShips,
}