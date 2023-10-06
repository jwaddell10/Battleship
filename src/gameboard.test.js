import gameBoard from "./gameboard.js";

describe('the gameboard', () => {
    test('has 10 rows', () => {
        const gameBoard1 = new gameBoard(10);
        expect(gameBoard1.rows).toBe(10);
    });
    test('has 10 columns', () => {
        const gameBoard1 = new gameBoard(10, 10);
        expect(gameBoard1.columns).toBe(10);
    });

    const gameBoardArray = gameBoard.createBoard();
    test('the gameboard array has 10 rows and 10 columns', () => {
        expect(gameBoardArray).toBe(10);
    });
})

