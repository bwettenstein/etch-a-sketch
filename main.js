const grid = document.querySelector('#grid-container');
const clearBoardButton = document.querySelector('#clearBoard');
const resizeBoard = document.querySelector('#resizeBoard')
// Can maybe delete these 
const column = document.querySelector('#column');
const row = document.querySelector('#row');

function createGrid(gridSize) {
    //let totalTiles = gridSize * gridSize;
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
            newRow.addEventListener("mouseover", colorOnHover)
            newColumn.appendChild(newRow);
        }
        grid.appendChild(newColumn);
    }
}
createGrid(16);
console.log(grid.childNodes)
console.log(grid.lastChild)

const tile = document.getElementsByClassName('tile');
clearBoardButton.addEventListener("click", clearBoard);
resizeBoard.addEventListener("click", (deleteGrid));

function colorOnHover() {
    this.style.backgroundColor = 'red';
}

function clearBoard() {
    for(let x = 0; x<tile.length; x++) {
        tile[x].style.backgroundColor = 'white';
    }
}
// Used when resizing the grid
function deleteGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
}


