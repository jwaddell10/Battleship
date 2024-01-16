class Player {
  constructor(name) {
    this.name = name;
    this.handleAttack = function () {
      x, y;
    };
  }

  setAttackHandler(coords) {
    this.handleAttack = coords;
  }

  clickHandler = (event) => {
    const cell = event.currentTarget;
    const shipElement = cell.querySelector(".computership");
    if (shipElement) {
      shipElement.style.backgroundColor = "blue";
    }

    if (!shipElement) {
      cell.style.backgroundColor = "white";
    }

    const attack = cell.id;
    const strSplit = attack.split("-");
    const x = strSplit[1];
    const y = strSplit[2];
    this.handleAttack(x, y);

    cell.removeEventListener("click", this.clickHandler);
  };

  checkAttack(x, y) {
    if (x < 0 || x > 10 || y < 0 || y > 10) {
      return;
    }
  }

  sendAttack() {
    const cells = document.querySelectorAll(".computercell");

    cells.forEach((cell) => {
      cell.addEventListener("click", this.clickHandler);
    });
  }
}

export { Player };
