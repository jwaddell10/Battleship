function renderBoard() {
    //create rows
    //cells for each row
    //they need unique identifiers, classes, target ids so they can be selected
    const boardContainer = document.querySelector('.boardcontainer')
    for (let i = 0; i <= 100; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        boardContainer.appendChild(squares);
        squares.id = `square-${i}`
    }
}

renderBoard(); 

export {
    renderBoard, 
}