class Computer {
  constructor() {
    this.handleComputerAttack = function () {
      x, y;
    };
    this.computerShots = [];
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

  checkRepeatHits(x, y) {
      const xCoordinates = [];
      const yCoordinates = [];
      let isDuplicate;
      
    this.computerShots.forEach((value, index) => {
        if (index % 2 === 0) {
            xCoordinates.push(value)
        } else if (index % 2 === 1) {
            yCoordinates.push(value)
        }
    })

    for (let i = 0; i < xCoordinates.length; i++) {
        if (xCoordinates[i] == x && yCoordinates[i] == y) {
            isDuplicate = true;
            break;
        }
    }
    
    if (isDuplicate === true) {
        return true;
    } else {
        return false;
    }
    }

  generateAttackCoordinates() {
    const x = this.generateRandomNumber();
    const y = this.generateRandomNumber();
    if (this.checkRepeatHits(x, y) !== false) {
      const newXy = this.generateAttackCoordinates();
      return newXy;
    }
    //this.checkRepeatHits(x, y);
    return { x, y };
  }

  computerSendAttack() {
    const { x, y } = this.generateAttackCoordinates();
    this.computerShots.push(x, y);
    return this.computerShots;
  }
}


const myFunction = () => {
  console.log('Yo')
}

myFunction();

export default Computer;