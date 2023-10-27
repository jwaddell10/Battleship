import { gameBoard } from "./gameboard.js";

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


export {
    renderBoard, 
}