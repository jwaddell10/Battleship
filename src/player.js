class Player {
    constructor(name) {
        this.name = name;
        this.handleAttack = function () {x, y}; // Define handleAttack as a callback property
    }

    setAttackHandler(coords) {
        this.handleAttack = coords; // Set the handleAttack callback
    }

    checkAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }

    sendAttack() {
        const cells = document.querySelectorAll('.computercell');
    
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                const shipElement = cell.querySelector('.computership');
                if (shipElement) {
                    shipElement.style.backgroundColor = 'blue';
                }

                if (!shipElement) {
                    cell.style.backgroundColor = 'green';
                }
    
                const attack = cell.id;
                const strSplit = attack.split('-');
                const x = strSplit[1];
                const y = strSplit[2];
                this.handleAttack(x, y);
            });
        });
    }
}

export { Player }