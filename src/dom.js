import { computerShipsArray, playerShipsArray } from "./ship.js";
import { computer } from "./game.js";

function renderPlayerBoard() {
  const boardContainer = document.querySelector(".boardcontainer");
  boardContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = `row-${i}`;
    boardContainer.appendChild(row);

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${i}-${j}`;
      row.appendChild(cell);
    }
  }
}

function renderComputerBoard() {
  const boardContainer = document.querySelector(".computerboardcontainer");
  boardContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("computerrow");
    row.id = `computerrow-${i}`;
    boardContainer.appendChild(row);

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("computercell");
      cell.id = `computercell-${i}-${j}`;
      row.appendChild(cell);
    }
  }
}

function renderPlayerShips(ships) {
  const cells = document.querySelectorAll(".boardcontainer .cell");
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });

  ships.forEach((ship) => {
    const x = ship.x;
    const y = ship.y;
    const length = ship.length;
    const orientation = ship.orientation;

    for (let i = 0; i < length; i++) {
      const shipElement = document.createElement("div");
      shipElement.classList.add("ship");
      shipElement.id = `ship-${x}-${y}-${i}`;

      if (orientation === "horizontal") {
        const cell = document.getElementById(`cell-${x}-${y + i}`);
        if (cell) {
          cell.appendChild(shipElement);
        } else {
          console.log(`Cell-${x}-${y} doesn't exist or is already filled`);
        }
      } else if (orientation === "vertical") {
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

function renderComputerShips(ships) {
  const cells = document.querySelectorAll(
    ".computerboardcontainer .computercell"
  );
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });

  ships.forEach((ship) => {
    const x = ship.x;
    const y = ship.y;
    const length = ship.length;
    const orientation = ship.orientation;

    for (let i = 0; i < length; i++) {
      const shipElement = document.createElement("div");
      shipElement.classList.add("computership");
      shipElement.id = `computership-${x}-${y}-${i}`;

      if (orientation === "horizontal") {
        const cell = document.getElementById(`computercell-${x}-${y + i}`);
        if (cell) {
          cell.appendChild(shipElement);
        } else {
          console.log(
            `ComputerCell-${x}-${y} doesn't exist or is already filled`
          );
        }
      } else if (orientation === "vertical") {
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

function renderComputerAttacks() {
  let x, y;

  computer.computerShots.forEach((num, index) => {
    if (index % 2 === 0) {
      x = num;
    } else if (index % 2 === 1) {
      y = num;
    }
  });

  if (x !== undefined && y !== undefined) {
    const cellId = `cell-${x}-${y}`;
    const cell = document.getElementById(cellId);
    const shipElement = cell.querySelector(".ship");

    if (cell) {
      let isHit = false;

      playerShipsArray.forEach((ship) => {
        if (
          (ship.orientation === "horizontal" &&
            x == ship.x &&
            y >= ship.y &&
            y < ship.y + ship.length) ||
          (ship.orientation === "vertical" &&
            x >= ship.x &&
            x < ship.x + ship.length &&
            y == ship.y)
        ) {
          isHit = true;
        }
      });

      if (isHit === true) {
        console.log(x, y);
        console.log(shipElement, "this is shipelement");

        shipElement.style.backgroundColor = "blue";
        console.log("It's a hit!");
      } else {
        cell.style.backgroundColor = "white";
      }
    }
  }
}

export {
  renderPlayerBoard,
  renderComputerBoard,
  renderPlayerShips,
  renderComputerShips,
  renderComputerAttacks,
};
