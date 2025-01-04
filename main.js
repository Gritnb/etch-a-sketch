let size = 16;
let color = "#CCCCCC";
const colorPool = [
    "#FF0000",
    "#FF9600",
    "#D2DC23",
    "#50DC4B",
    "#41DCD7",
    "#2DC8E1",
    "#1E7DF0",
    "#5F14F0",
    "#B90AFA",
    "#FA0ADC"
];

//Module enables user to pick a color.
const colorPicker = document.querySelector(".color-picker");
const colorContainer = document.querySelector(".picker-box");

colorPicker.onchange = function() {
    colorContainer.style.backgroundColor = colorPicker.value;
    color = colorPicker.value;
    eraser.style.border = "none";
}
colorContainer.style.backgroundColor = colorPicker.value;

//Randomized Drawing module.
let randomState = false;
const randomizer = document.querySelector(".rnd-btn");
randomizer.onclick = () => {
    randomState = !randomState;
};

randomizer.addEventListener("click", () => {
    randomizer.style.border = randomState ? "thin solid lightgreen" : "none";
});

function colorMode() {

    let colorIndex = Math.floor(Math.random() * colorPool.length);
    return randomState ? colorPool[colorIndex] : color;
};

//Setting Grid Size with slider module.
const slider = document.querySelector(".range-slider");
const output = document.querySelector(".size-header");

output.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
slider.addEventListener("input", () => {
    output.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
    size = slider.value;
    resetGrid();
    generateGrid(size);
});

//Resetting the grid.
function resetGrid() {
    canvas.replaceChildren();
};

//Eraser Mode Module
let eraserState = false;
const eraser = document.querySelector(".eraser-btn");
eraser.onclick = () => {
    eraserState = !eraserState;
};

eraser.addEventListener("click", () => {
    color = eraserState ? "#191919" : colorPicker.value;
    eraser.style.border = eraserState ? "thin solid lightgreen" : "none";
});

//Reset Module
const userReset = document.querySelector(".reset-btn");
userReset.addEventListener("click", () => {
    canvas.replaceChildren();
    generateGrid(size);
});

//Sketching algorithm.
const canvas = document.querySelector(".canvas");

function generateGrid(size) {

    let totalCells = Math.pow(size, 2);

    for (let i = 0; i < totalCells; i++) {

        const cell = document.createElement("div");
        cell.style.height = `${600 / size}px`;
        cell.style.aspectRatio = "1";
        canvas.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = colorMode();
        });  
    };
};

//Initial State.
generateGrid(16);
