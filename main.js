let container = document.getElementById("container");
let gridSize = 16;
generateGrid(gridSize);
document.getElementById("erase").addEventListener("click", eraseSquares)
function generateGrid(gridSize)
{
    for(var i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(var x = 0; x <= gridSize; x++){
            let cell = document.createElement("div")
            cell.className = "gridSquare";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
fillSquare();

function fillSquare(){
    let squares = document.querySelectorAll(".gridSquare");
    squares.forEach((sqaure) => {
        sqaure.addEventListener('mouseover', (e) =>{
            e.target.classList.add("gridSquareHover");
        })
    })
}

function eraseSquares(){
    let squares = document.querySelectorAll(".gridSquare");
    squares.forEach((square) => {
        if (square.classList.contains("gridSquareHover")){
        square.classList.remove("gridSquareHover");
    }
})

}