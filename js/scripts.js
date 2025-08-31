const frame =  document.querySelector(".grid-section");
const sizes = [4,8,16];
let counter = 0;

function createSquare(squareSize){
    const square = document.createElement('div');
    square.classList.add("square")
    square.style.width = squareSize;
    square.style.height = squareSize; 
    frame.appendChild(square);
}

function black(){
    const squares = document.querySelectorAll(".grid-section div");
    squares.forEach(square => square.addEventListener('mouseover',() => {
        square.style.backgroundColor = "black";
    }));
}

function createGrid(){
    frame.innerHTML = "";
    const numOfSquares = sizes[counter];
    squareWidth = 100/numOfSquares + "%";
    console.log(frame.clientWidth);
    console.log(squareWidth);
    for (let i = 0; i < numOfSquares*numOfSquares;i++){ 
        createSquare(squareWidth);
    } 
    counter = (counter + 1) % sizes.length;
}

document.querySelector(".size button").addEventListener('click',createGrid);
document.querySelector(".black button").addEventListener('click',black);

createGrid();





