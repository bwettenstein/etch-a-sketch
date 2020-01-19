const gridContainer = document.querySelector('.container');

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

// function createGrid(size){
//     for (i = 0; i < size; i++){
//         for (x = 0; x < size; x++){
//             let gridBox = document.createElement('div');
//             container.appendChild(gridBox);
//             gridBox.className = 'grid';
//         }   
//     }
//     add event listener to each div in grid
//     const divs = document.querySelectorAll('.container div');
//     divs.forEach( function(divs){
//         divs.addEventListener('mouseover', function(e){
//             e.target.classList.add('hover');
//         });
//     });  
// }
// createGrid(16);

