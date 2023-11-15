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
  
    placeShips(ships) {
      ships.forEach((ship) => {
        const { x, y, orientation } = ship;
  
        if (orientation === "horizontal") {
          for (let i = 0; i < ship.length; i++) {
            this.board[ship.x][ship.y + i] = ship;
          }
        } else if (orientation === "vertical") {
          for (let i = 0; i < ship.length; i++) {
            this.board[ship.x + i][ship.y] = ship;
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
            ship.x == x && ship.y + i == y
          ) {
            // Hit on a horizontal ship
            ship.wasHit();
            ship.wasSunk(ship);
            isHit = true;
            this.hitShots.push(x, y);
            return this.hitShots;
          } else if (
            ship.orientation === "vertical" &&
            ship.x + i == x && ship.y == y
          ) {
            // Hit on a vertical ship
            ship.shipWasHit();
            ship.shipWasSunk(ship);
            isHit = true;
            this.hitShots.push(x, y);
            return this.hitShots;
          }
        }
      });
  
      if (!isHit) {
        // If there was no hit, record the miss
        this.missedAttacks.push(x, y);
        return this.missedAttacks;
      }
    }
  
    allShipsSunk(ships) {
      let allShipsSunk = false;
  
      const shipsSunk = ships.filter((ship) => ship.shipWasSunk() === true);
  
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
  