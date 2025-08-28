function createSquare(squareSize){
    const frame =  document.querySelector(".frame");
    const square = document.createElement('div');
    square.classList.add("square")
    square.style.width = squareSize;
    square.style.height = squareSize; 
    frame.appendChild(square);
}

function createGrid(e){
    const frame =  document.querySelector(".frame");
   const numOfSquares = e.target.innerText;
    squareWidth = 100/numOfSquares + "%";
    console.log(frame.clientWidth);
    console.log(squareWidth);
    
    
    

    for (let i = 0; i < numOfSquares*numOfSquares;i++){ 
        createSquare(squareWidth);

    } 
}

const btns = document.querySelectorAll("button");

btns.forEach(btn => btn.addEventListener('click',createGrid));

