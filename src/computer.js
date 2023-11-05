class Computer {
    
    constructor() {
        this.turn = false;
    }

    computerCheckAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return;
        }
    }
    
    generateRandomNumber() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return { x, y }
      }

    checkRepeatHits(x, y, shotsArray) {
        const coordinates = [x, y];
        const hitsRepeat = shotsArray.some((coords) => coords[0] === x && coords[1] === y);

        if (hitsRepeat === true) {
            console.log('you hit this already');
        } else return coordinates
      }

    computerSendAttack(x, y) {
        shotsArray.push([x, y]);
        this.computerCheckAttack(x, y);
        this.checkRepeatHits(x, y, shotsArray);
        let computerAttack = this.board.board[x][y];
    }
}
const shotsArray = []

export default Computer