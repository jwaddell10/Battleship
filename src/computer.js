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
  
    generateAttackCoordinates() {
      const x = this.generateRandomNumber();
      const y = this.generateRandomNumber();
      return { x, y };
    }
  
    checkRepeatHits(x, y) {
      const coordinates = [x, y];
      console.log(coordinates, 'these are coords')
    
      this.computerShots.forEach((item) => {
        console.log(item, 'this is item')
      })
      /*if (hitsRepeat === true) {
        this.computerSendAttack();
      } else return coordinates;*/
    }
  
    computerSendAttack() {
      const { x, y } = this.generateAttackCoordinates();
      this.computerCheckAttack(x, y);
      this.checkRepeatHits(x, y);
      this.computerShots.push(x, y);
      return this.computerShots;
    }
  }
  
  export default Computer;
  
