let numRows = 0;
let numColumns = 0;
let colorSelected;

function addRow(){
    const grid = document.getElementById("grid");
    const row = grid.insertRow();

    if(numRows == 0 && numColumns == 0){
        const firstCell =  row.insertCell();
        const cells = document.querySelectorAll("td");
        cells[0].onclick = function(){
            cells[0].style.backgroundColor = colorSelected;
        }
        numColumns++;
        numRows++;
    }
    else{
        for(let i = 0; i < numColumns; i++){
            const rowCells = row.insertCell(); 
        }
        const cells = document.querySelectorAll("td");
        for(let i = 0; i < cells.length; i++){
            cells[i].onclick = function(){
                cells[i].style.backgroundColor = colorSelected;
            }
        }
        numRows++;
    }
}

function addColumn() {
    const grid = document.getElementById("grid");
    const column = document.getElementsByTagName("tr");

    if(numRows == 0 && numColumns == 0){
        const firstRow = grid.insertRow();
        const firstCell = firstRow.insertCell();
        const cells = document.querySelectorAll("td");
        cells[0].onclick = function(){
            cells[0].style.backgroundColor = colorSelected;
        }
        numRows++;
        numColumns++;
    }
    else{
        for(let i = 0; i < numRows; i++){
            const columCells = column[i];
            columCells.insertCell();
        }
        const cells = document.querySelectorAll("td");
        for(let i = 0; i < cells.length; i++){
            cells[i].onclick = function(){
                cells[i].style.backgroundColor = colorSelected;
            }
        }
        numColumns++;
    }
}

function removeRow() {
    const grid = document.getElementById("grid");
    if(numRows > 0){
        grid.deleteRow(numRows - 1);
        numRows--;
    }
    if(numRows < 0){
        numColumns = 0;
        numRows = 0;
    }
    if(numRows == 0){
        alert("There are no more rows to remove!!!");
    }
}

function removeColumn() {
    const grid = document.getElementById("grid");
    const columns = grid.getElementsByTagName("tr");

    if(numColumns > 0){
        for(let i = 0; i < columns.length; i++){
            columns[i].deleteCell(numColumns - 1);
        }
        numColumns--;
    }
    if(numColumns < 0){
        numColumns = 0;
        numRows = 0;
    }
    if(numRows == 0){
        alert("There are no more columns to remove!!!");
    }
}

function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    document.getElementById("colorchosen").innerHTML = "You selected the color: " + colorSelected;
}

function uncoloredCells() {
    const color = document.getElementById("selectedColorId").value;
    const cells = document.querySelectorAll("td");
    for(let i = 0; i < cells.length; i ++){
        if(cells[i].style.backgroundColor === "" || cells[i].style.backgroundColor === "white"){
            cells[i].style.backgroundColor = color;
        }
    }
}

function colorAllCells() {
    const color = document.getElementById("selectedColorId").value;
    const cells = document.querySelectorAll("td");
    for(let i = 0; i < cells.length; i ++){
        cells[i].style.backgroundColor = color;
    }
}

function clearCells() {
   const cells = document.querySelectorAll("td");
   for(let i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = "";
   }
}

