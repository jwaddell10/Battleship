class Player {

    constructor(name) {
        this.name = name;
        this.turn = true;
    }

    checkAttack(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10) {
            return; // Invalid attack, outside the 10x10 grid
        }
    }

    sendAttack() {
        const attackArray = [];
        const cell = document.querySelectorAll(`.computercell`);
        
        cell.forEach((item) => {
            item.addEventListener('click', () => {
                const attack = item.id

                const strSplit = attack.split('-');
                const x = strSplit[1];
                const y = strSplit[2];
                return { x }
            })
        })
    }
    
}

export { Player }