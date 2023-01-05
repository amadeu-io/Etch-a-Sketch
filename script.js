const container = document.querySelector('.container');

let a = 16; // side size

// creates squares
for (let i = 0; i < a**2; i++) { 
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

let square = document.querySelectorAll('.square');

// finds the size the squares based on the side size and dimentions of the container
squareSize = {
    height: `${500/a}px`,
    width: `${500/a}px`,
};

for (let i = 0; i < a**2; i++) {
    Object.assign(square[i].style, squareSize); // add size to each square

    // add infinite hover for each square
    square[i].addEventListener('mouseenter', function() {
        square[i].classList.remove('square');
        square[i].classList.add('square-hover');
    });
};

