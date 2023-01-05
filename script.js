/* now we are implementing the darker each step, we need to find a way to simply count each step
like 1, 2, 3, 4, and then do the appropiate transofmation in the filter brightness property */


// function that generates a random number between 0 and 255
function getRandom() {
    return Math.floor(Math.random()*256);
}

// function that generates a random rgb color 
function getRandomColor() {
    let r = getRandom();
    let g = getRandom();
    let b = getRandom();
    return `rgb(${r}, ${g}, ${b})`;
}

// function decreases 10% every time it's called
function stepDown() {
    let i = 100;
    i--;
    return i;
}

// function that generates grid
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
            // square[i].classList.add('square-hover');
            square[i].style.backgroundColor = getRandomColor(); // radom color
            // square[i].style.filter = `brightness(${100-i*10}%)`; // 10% darker each step
        });
    };
};

const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

// initial conditions shown on the page
generateGrid(16);
sliderValue.innerHTML = 16;

// slider that calls grid
slider.addEventListener('input', function() {
    let gridSize = event.target.value; // shows the slider value
    container.innerHTML = ''; // removes previous grid
    generateGrid(gridSize);
    sliderValue.innerHTML = gridSize; 
});





