const grid = document.querySelector('#grid-container');
const clearBoardButton = document.querySelector('#clearBoard');
const resizeBoardButton = document.querySelector('#resizeBoard')
const tile = document.getElementsByClassName('tile');
const chooseGridBackgroundColor = document.querySelector('#chooseGridBackgroundColor');
const defaultGridSize = 16;
const defaultGridColor = '#f1b0da';
const clearGridColor = '#ffffff';

clearBoardButton.addEventListener('click', clearBoard);
resizeBoardButton.addEventListener('click', resizeBoard);
chooseGridBackgroundColor.addEventListener('change', changeGridBackgroundColor, false);

createGrid(defaultGridSize);

function createGrid(gridSize) {
    // Making the column
    for (let i = 0; i<gridSize; i++) {
        let newColumn = document.createElement('div');
        newColumn.className = 'tile';
        newColumn.id = 'column'
    // Making the row
        for (let j=0; j<gridSize; j++) {
            let newRow = document.createElement('div');
            newRow.className = 'tile';
            newRow.id = 'row';
            newRow.addEventListener('mouseover', changeColorOnHover)
            newColumn.appendChild(newRow);
        }
        grid.appendChild(newColumn);
    }
}

function clearBoard() {
    for(let x = 0; x<tile.length; x++) {
        tile[x].style.backgroundColor = clearGridColor;
    }
}
// Used when resizing the grid
function deleteGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
}
function promptGridSize() {
    let newGridSize = prompt('Enter new grid size', defaultGridSize);
    if (newGridSize > 0) {
        return newGridSize;
    }
    else {
        alert('Invalid response');
    }
}
function resizeBoard() {
    let newGridSize = promptGridSize();
    if (newGridSize != null) {
        deleteGrid();
        createGrid(newGridSize);
    }
}

function changeColorOnHover(color=defaultGridColor) {
    this.style.backgroundColor = defaultGridColor;
}

function changeGridBackgroundColor(newBackgroundColor) {
    for(let x = 0; x<tile.length; x++) {
        tile[x].style.backgroundColor = newBackgroundColor.target.value;
    }
}

