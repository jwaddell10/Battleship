class Player {
  constructor(name) {
    this.name = name;
    this.handleAttack = function () {
      x, y;
    }; // Define handleAttack as a callback property
  }

  setAttackHandler(coords) {
    this.handleAttack = coords; // Set the handleAttack callback
  }
  
  clickHandler = (event) => {
    const cell = event.currentTarget
    const shipElement = cell.querySelector(".computership");
        if (shipElement) {
          shipElement.style.backgroundColor = "blue";
        }
 
        if (!shipElement) {
          cell.style.backgroundColor = "green";
        }

        const attack = cell.id;
        const strSplit = attack.split("-");
        const x = strSplit[1];
        console.log(x, 'this is x')
        const y = strSplit[2];
        console.log(y, 'this is y')
        this.handleAttack(x, y);
    }
  

  checkAttack(x, y) {
    if (x < 0 || x > 10 || y < 0 || y > 10) {
      return; // Invalid attack, outside the 10x10 grid
    }
  }

  sendAttack() {
    const cells = document.querySelectorAll(".computercell");

    cells.forEach((cell) => {
      cell.addEventListener("click", this.clickHandler) 
    })
  }
}

export { Player };
