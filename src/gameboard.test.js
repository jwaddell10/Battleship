import gameBoard from "./gameboard.js";
import Ship from './ship.js'

describe('the gameboard', () => {
    let gameboard1;
    let board;
    let newShip;

    beforeEach(() => {
        gameboard1 = new gameBoard();
        board = gameboard1.createBoard();
        newShip = new Ship(4, 0, false, 0, 4);
        board[newShip.x][newShip.y] = newShip;
    });

    test('has 10 rows', () => {
        expect(board.length).toBe(10);
    });
    
    test('has 10 columns', () => {
        expect(board[0].length).toBe(10);
    });

    test('ship is in the right coordinates', () => {
        expect(board[newShip.x][newShip.y]).toBe(newShip);
    });
});