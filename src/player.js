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
        const cell = document.querySelectorAll(`.computercell`);
        
        cell.forEach((item) => {
            item.addEventListener('click', (e) => {
                const attack = e.target.attributes.id
                console.log(attack, 'send attack worked')
                return attack;
            })
        })
    }
}

export { Player }