let gridContainer = document.getElementById('container');
let gridToAdd = document.createDocumentFragment('div');
let newBoard = document.getElementById('resizeBoard');
let clearBoard = document.getElementById('clearBoard');
const col = document.getElementById('col');

// Need to ask the user this eventually 
let column = 16;
let row = 16;

// Create the grid using user entered dimensions
let createGrid = (column, row) => {
    for (let v = 0; v < column; v++) {
        let column = document.createElement('div');
        //column.id = 'col' + (v+1);
        column.id = 'col';
        column.className = 'column'
    
        for(let g = 0; g<row; g++) {
            let row = document.createElement('div');
            //row.id = 'row' + (g+1); 
            row.id = 'row';
            row.className = 'row';
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

let promptNewGrid = () => {
    let newColumn = prompt("Enter new height for grid");
    let newRow = prompt("Enter new width for grid");
    createGrid(newColumn, newRow);
}

newBoard.addEventListener('click', promptNewGrid);
createGrid(column, row);
resetBoard();


