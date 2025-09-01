const frame = document.querySelector(".grid-section");
const sizes = [4, 8, 16];
let counter = 0;
let currentMode = "black";

function createSquare(squareSize) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize;
    square.style.height = squareSize;

    // one listener per square
    square.addEventListener("mouseover", () => {
        if (currentMode === "black") {
            square.style.backgroundColor = "black";
        } else if (currentMode === "random") {
            const r = randomColorNumber();
            const g = randomColorNumber();
            const b = randomColorNumber();
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else{
            let currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
            square.style.opacity = currentOpacity + 0.1;
            }
            square.style.backgroundColor = "black";
        }
    });

    frame.appendChild(square);
}

function randomColorNumber() {
    return Math.floor(Math.random() * 256);
}

function createGrid() {
    frame.innerHTML = "";
    const numOfSquares = sizes[counter];
    let squareWidth = 100 / numOfSquares + "%";

    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
        createSquare(squareWidth);
    }

    counter = (counter + 1) % sizes.length;
}

function clear(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(sqr => {
            sqr.style.backgroundColor = "#e9d8a6";
            sqr.style.opacity = "";
        })
}

document.querySelector(".size button").addEventListener("click", createGrid);
document.querySelector(".black button").addEventListener("click", () => {
    currentMode = "black";
});
document.querySelector(".random button").addEventListener("click", () => {
    currentMode = "random";
});

document.querySelector('.shade button').addEventListener('click', () => {
    currentMode = "shade";
} )

document.querySelector(".clear button").addEventListener('click', clear);
createGrid();
