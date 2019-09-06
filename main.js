const container = document.querySelector('#container');

let xDim = 16;
let yDim = 16;
let color = 0;

let gridSize = xDim * yDim;

function selectBlack() {
    return color = 0;
}

function selectMultiColor() {
    return color = 1;
}

function selectDarkerShade() {
    return color = 2;
}

function sketch(e) {
    if (e.target.className === 'block') {
        if (color == 0) { //use condition to change color
            e.target.style.background = 'rgb(0,0,0)';
        }
        if (color == 1) { //use condition to change color
            e.target.style.background = randomColor();
        }
        if (color == 2) { //use condition to change color
            let opacity = e.target.style.opacity
            if (opacity == '') {
                e.target.style.opacity = 1;
            } else {
                opacity -= 0.1;
                e.target.style.opacity = opacity;
                return console.log(opacity);
            }                       
        }
      }
}    

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return bgColor;
}

function clearGrid () {
    let clear = document.getElementsByClassName('block');
    for (i = 0; i < gridSize; i++) {
        clear[i].style.backgroundColor = 'rgb(158, 244, 255)';
        clear[i].style.opacity = '1';
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
        gridbox.style.backgroundColor = 'rgb(158, 244, 255)';
        container.appendChild(gridbox);
        gridbox.addEventListener('mouseover', sketch)
    }    
    clearGrid()
}
window.onload = createGrid(xDim, yDim);

function createNewGrid() {
    xDim = prompt('Enter new horizontal dimension', '16');
    yDim = prompt('Enter new vertical dimension', '16');
    gridSize = xDim *yDim;


    createGrid(xDim, yDim);
}









