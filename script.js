const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

slider.addEventListener('input', function() {
    console.log(event.target.value);
    let gridSize = event.target.value;
    container.innerHTML = '';
    generateGrid(gridSize);
})

// button prompts grid size
const button = document.querySelector('button');
button.addEventListener('click', function() {
    let gridSize = prompt('Enter grid size: '); 
    container.innerHTML = ''; // deletes previous grid before adding new one
    generateGrid(gridSize);
});

// function generates grid
function generateGrid(a) {
    // creates squares
    for (let i = 0; i < a**2; i++) { 
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    };

    // selects all squares and adds them to array
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
            square[i].classList.add('square-hover');
        });
    };
};





