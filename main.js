const container = document.querySelector('#container');

let xDim = 16;
let yDim = 16;

let gridSize = xDim *yDim;


function sketch(e) {
    
    if (e.target.className === "block") {
        if (gridSize == xDim *yDim) { //use condition to change color
            e.target.style.background = "#000";
        }
      }
    

}    

function createGrid(xDim, yDim){
    container.style.gridTemplateRows = `repeat(${xDim}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${yDim}, 1fr)`;
    for (i = 0; i < gridSize; i++) {
        let clear = document.remove // reset background jaklsjdf;kljds;laf
        let gridbox = document.createElement('div');
        gridbox.innerHTML = ' ';
        gridbox.className = 'block';
        gridbox.style.backgroundColor = "rgb(158, 244, 255)";
        container.appendChild(gridbox);
        gridbox.addEventListener('mouseover', sketch)
    }    
}
window.onload = createGrid(xDim, yDim);

function createNewGrid() {
    xDim = prompt('Enter new horizontal dimension', '16');
    yDim = prompt('Enter new vertical dimension', '16');
    gridSize = xDim *yDim;


    createGrid(xDim, yDim);
}









