const grid = document.querySelector('#grid-container');
const column = document.querySelector('#column');
const row = document.querySelector('#row');
let tile = document.getElementsByClassName('.tile');

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
            newRow.addEventListener("mouseover", changeColor)
            newColumn.appendChild(newRow);
        }
        grid.appendChild(newColumn);
    }
}

function changeColor() {
    this.style.backgroundColor = 'red';
}

createGrid(4);
console.log(tile)

