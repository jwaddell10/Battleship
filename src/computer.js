class Computer {
    
    constructor() {
        this.handleComputerAttack = function () {x, y}
    }

    setAttackHandler(coords) {
        this.handleComputerAttack = coords; // Set the handleAttack callback
    }

    computerCheckAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return;
        }
    }
    
    generateRandomNumber() {
        return Math.floor(Math.random() * 10);
      }

    checkRepeatHits(x, y, shotsArray) {
        const coordinates = [x, y];
        const hitsRepeat = shotsArray.some((coords) => coords[0] === x && coords[1] === y);

        if (hitsRepeat === true) {
            console.log('you hit this already');
        } else return coordinates
      }

    computerSendAttack() {
        const x = this.generateRandomNumber()
        const y = this.generateRandomNumber()
        console.log(x, y, 'this is xy')
        shotsArray.push(x, y);
        this.computerCheckAttack(x, y);
        this.checkRepeatHits(x, y, shotsArray);
    }
}
const shotsArray = []

export default Computer