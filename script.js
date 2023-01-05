const container = document.querySelector('.container');

let a = 16; // side size

// creates squares
for (let i = 0; i < a**2; i++) { 
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// selects all created squares and adds the squareSize style to every single one of them
const square = document.querySelectorAll('.square');

squareSize = {
    height: `${500/a}px`,
    width: `${500/a}px`,
};

for (let i = 0; i < a**2; i++) {
    Object.assign(square[i].style, squareSize); 
};
