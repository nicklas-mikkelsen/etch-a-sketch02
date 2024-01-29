let color = 'black';
let click = true;

function gridSize(size) {
    let drawingGrid = document.querySelector('.drawing.grid');
    let squares = drawingGrid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    drawingGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawingGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
       
    let amout = size * size;
    for (let i = 0; i < amout; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', paint)
        square.style.backgroundColor = 'white';
        drawingGrid.insertAdjacentElement("beforeend", square);
    }
}
gridSize(16);

function changeGridSize (input) {
    if (input >= 2 && input <= 100) {
        gridSize(input);
    } else {
        alert("Size must be between 2 and 100!")
    }
}

function paint() {
    if (click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(selectedColor) {
    color = selectedColor;
}

function clearGrid () {
    let drawingGrid = document.querySelector('.drawing.grid');
    let squares = drawingGrid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('.drawing.grid').addEventListener('click', () => {
    click = !click;
    if(click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring"
    }
});