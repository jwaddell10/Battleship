import gameBoard from "./gameboard.js";
import Ship, { shipsArray } from "./ship.js";

describe("the gameboard", () => {
  test("the gameBoard was created", () => {
    const newGameBoard = new gameBoard();
    expect(newGameBoard).toBe(true);
  });
});
