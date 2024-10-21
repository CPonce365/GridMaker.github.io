let numRows = 0;
let numColumns = 0;
let colorselected;

function addRow() {
    alert("Clicked on add Row");
}

function addColumn() {
    alert("clicked on add Collumn")
}

function removeRow() {
    alert("Clicked on remove Row");
}

function removeColumn() {
    alert("Clicked on remove Column");
}

function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

function uncoloredCells() {
    alert("Clicked on uncolor all cells");
}

function colorAllCells() {
    alert("Clicked on color all cells");
}

function clearCells() {
    alert("Clicked on clear all cells of color");
}

