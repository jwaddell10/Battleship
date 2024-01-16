class gameBoard {
  constructor() {
    this.board = this.createBoard();
    this.missedAttacks = [];
    this.hitShots = [];
  }

  createBoard() {
    let board = [];
    let rows = 10;
    let columns = 10;

    for (let x = 0; x < rows; x++) {
      board[x] = [];
      for (let y = 0; y < columns; y++) {
        board[x][y] = ".";
      }
    }
    return board;
  }

  clearBoard() {
    this.board = this.createBoard();
  }

  checkShips(ships) {
    ships.forEach((ship) => {
      const { x, y, orientation, length } = ship;

      if (orientation === "horizontal" && y + length > 10) {
        console.log(x, y, orientation, ship, "This ship is too big");
        ship.y = Math.max(0, 10 - length); 
      } else if (orientation === "vertical" && x + length > 10) {
        console.log(x, y, orientation, ship, "This ship is too vertical");
        ship.x = Math.max(0, 10 - length);
      }
    });
  }
  generateCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  placeShips(ships) {
    const boardcontainer = document.querySelector(".boardcontainer");
    ships.forEach((ship) => {
      let { x, y, orientation, length } = ship;
      let canPlaceShip = true;

      if (orientation === "horizontal") {
        for (let i = 0; i < length; i++) {
          const currentCell = this.board[x] && this.board[x][y + i];
          if (currentCell !== "." || currentCell === undefined) {
            canPlaceShip = false;
            break;
          }
        }
      } else if (orientation === "vertical") {
        for (let i = 0; i < length; i++) {
          const currentCell = this.board[x + i] && this.board[x + i][y];
          if (currentCell !== "." || currentCell === undefined) {
            canPlaceShip = false;
            break;
          }
        }
      }

      if (!canPlaceShip) {
        ship.x = this.generateCoordinate();
        ship.y = this.generateCoordinate();
        this.placeShips([ship]);
      } else {
        if (orientation === "horizontal") {
          for (let i = 0; i < length; i++) {
            this.board[x][y + i] = ship;
          }
        } else if (orientation === "vertical") {
          for (let i = 0; i < length; i++) {
            this.board[x + i][y] = ship;
          }
        }
      }
    });
  }

  receiveAttack(ships, x, y) {
    let isHit = false;

    ships.forEach((ship) => {
      for (let i = 0; i < ship.length; i++) {
        if (
          ship.orientation === "horizontal" &&
          ship.x == x &&
          ship.y + i == y
        ) {
          ship.wasHit();
          ship.wasSunk(ship);
          isHit = true;
          this.hitShots.push(x, y);
          return this.hitShots;
        } else if (
          ship.orientation === "vertical" &&
          ship.x + i == x &&
          ship.y == y
        ) {
          ship.wasHit();
          ship.wasSunk(ship);
          isHit = true;
          this.hitShots.push(x, y);
          return this.hitShots;
        }
      }
    });

    if (!isHit) {
      this.missedAttacks.push(x, y);
      return this.missedAttacks;
    }
  }

  allShipsSunk(ships) {
    let allShipsSunk = false;

    const shipsSunk = ships.filter((ship) => ship.wasSunk() === true);

    if (shipsSunk.length !== ships.length) {
      allShipsSunk = false;
      return allShipsSunk;
    } else if (shipsSunk.length === ships.length) {
      allShipsSunk = true;
      return allShipsSunk;
    }
  }
}

export { gameBoard };
