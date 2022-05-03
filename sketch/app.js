const grid = document.querySelector('.board');
const resetButton = document.querySelector('.reset');
console.log(resetButton);
let mode = 'rainbow';
//check state of the mouse cursor
mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;

}
document.body.onmouseup = () => {
    mouseDown = false;

}
function changeGridSize(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.setAttribute("dragable", false);
        gridElement.addEventListener('mousedown', changeGridElementColor);
        gridElement.addEventListener('mouseover', changeGridElementColor);
        grid.appendChild(gridElement);

    }


}
function changeGridElementColor(e) {
    if (e.type == "mouseover" && !mouseDown) return;

    gridElement = e.target;
    if (mode == 'rainbow') {
        let R = Math.round(Math.random() * 256);
        let G = Math.round(Math.random() * 256);
        let B = Math.round(Math.random() * 256);
        gridElement.style.backgroundColor = `rgb(${R},${G},${B})`;
    }


}
function reset() {
    let gridElements = document.querySelectorAll('.grid-element');
    console.log(gridElements);
    gridElements.forEach(element => element.style.backgroundColor = `rgb(255,255,255)`)
}
resetButton.addEventListener('mousedown', (e) => {
    reset();
})

changeGridSize(16);
reset();