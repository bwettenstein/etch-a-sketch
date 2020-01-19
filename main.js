const gridContainer = document.querySelector('.container');

// FIGURE OUT HOW TO MAKE THE FIRST ROW disappear
let createGrid = (size=16) => {
    for (let v = 0; v < size; v++) {
        let column = document.createElement('div');
        //column.id = 'col' + (v+1);
        column.id = 'containerGrid';
        column.class = 'container-grid';
    
        for(let g = 0; g<size; g++) {
            let row = document.createElement('div');
            //row.id = 'row' + (g+1); 
            row.id = 'grid';
            row.className = 'grid';
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

createGrid();


