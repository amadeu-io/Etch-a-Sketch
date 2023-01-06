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

// function that generates an 'a' sized grid
function generateGrid(a) {
    // removes previous grid
    container.innerHTML = ''; 

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

        // by default, black paint
        square[i].addEventListener('mouseenter', function() {
            square[i].style.backgroundColor = 'black';
        });

        // rainbow toggle
        rainbow.addEventListener('click', function() {

            if (toggle) { // on
                rainbow.classList.add('rainbow-toggle');
                square[i].addEventListener('mouseenter', function() {
                square[i].style.backgroundColor = getRandomColor(); // rainbowcolor
                toggle = false;
                });
            } else { // off
                rainbow.classList.remove('rainbow-toggle');
                square[i].addEventListener('mouseenter', function() {
                square[i].style.backgroundColor = 'black';
                toggle = true;
                });
                
            }

        });
    };
    

    // reset button
    reset.addEventListener('click', function() {
        for (let i = 0; i < a**2; i++) {
            square[i].style.backgroundColor = 'transparent';
        };
    });

};

// program starts here
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const reset = document.querySelector('.reset');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');

// initial conditions
generateGrid(16);
sliderValue.innerHTML = 16;
let toggle = true;


// slider that calls grid
slider.addEventListener('input', function() {
    let gridSize = event.target.value; // shows the slider value (event.target = slider)
    generateGrid(gridSize);
    sliderValue.innerHTML = gridSize; 
});