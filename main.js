let gridContainer = document.getElementById('container');
let gridToAdd = document.createDocumentFragment('div');

// Need to ask the user this eventually 
let column = 4;
let row = 4;

// Create the grid using user entered dimensions
let createGrid = (column, row) => {
    for (let v = 0; v < column; v++) {
        let column = document.createElement('div');
        column.id = 'col' + (v+1);
        column.className = 'column'
    
        for(let g = 0; g<row; g++) {
            let row = document.createElement('div');
            row.id = 'row' + (g+1); 
            row.className = 'row';
            column.appendChild(row);
        }
    
        gridContainer.appendChild(column);
    }
}

createGrid(column, row);

