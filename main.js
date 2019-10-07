let container = document.getElementById("container");
let gridSize = 16;
let boardSize = 400;
let shiftToDraw = document.getElementById("shiftDrawCheck");
let shiftKeyPressed = false;


var drawInk = function (e) {
    if(shiftToDraw.checked == true) {
        if(shiftKeyPressed){
            console.log(shiftKeyPressed)
            e.target.classList.add("gridSquareHover");
        }
    }
    if(shiftToDraw.checked == false){
        e.target.classList.add("gridSquareHover");
    }

};


start();

function start() {
    window.addEventListener('keydown', (e) => {
       if(e.keyCode == 16) {
           shiftKeyPressed = true;
       }
    });
    window.addEventListener('keyup', (e) => {
        if(e.keyCode == 16){
            shiftKeyPressed = false;
        }
    })
    generateGrid(gridSize);
    addListeners();
    showInfo();
}

document.getElementById("erase").addEventListener("click", eraseSquares)
function generateGrid(currentGridSize) {
    console.log("grid size: " + currentGridSize)
    for (let i = 0; i < currentGridSize; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let x = 0; x <= currentGridSize; x++) {
            let cell = document.createElement("div")
            cell.className = "gridSquare";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}




function addListeners() {
    let squares = document.querySelectorAll(".gridSquare");

    squares.forEach((square) => {
        square.addEventListener('mouseover', drawInk, true)
    })

}

function eraseSquares() {
    let squares = document.querySelectorAll(".gridSquare");
    squares.forEach((square) => {
        if (square.classList.contains("gridSquareHover")) {
            square.classList.remove("gridSquareHover");
        }
    })
    changeSize();
}

function changeSize() {
    let grid = document.getElementById("container");
    boardSize = document.getElementById("squareSize").value;
    grid.innerHTML = "";
    gridSize = newSize = document.getElementById("gridSize").value;
    console.log(changeSize)
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.setProperty('--grid-squares', gridSize);
    start();

    boardSize = boardSize + "px";
    grid.style.setProperty('--grid-size', boardSize);

}

function showInfo() {
    var resolutionLabel = document.getElementById("resolutionInfo");
    var boardSizeLabel = document.getElementById("boardSize");
    var squareSizeLabel = document.getElementById("totalSquares");
    resolutionLabel.textContent = `Board Resolution: ${gridSize} X ${gridSize} squares`
    boardSizeLabel.textContent = `Board Size: ${boardSize} X ${boardSize} pixels`
    squareSizeLabel.textContent = `Size of Each Square: ${boardSize / gridSize} pixels`
}
