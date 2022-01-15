const tableBody = document.getElementById("tableBody");
const minusRowBtn = document.getElementById("minusRow");
const plusRowBtn = document.getElementById("plusRow");
const minusColBtn = document.getElementById("minusCol");
const plusColBtn = document.getElementById("plusCol");
const onButton = document.getElementById("on-button");
const offButton = document.getElementById("off-button");
const tableKeyHeading = document.getElementById("table-key-heading");
const tableKeyRows = document.getElementById("table-key-rows");
const tableKeyCols = document.getElementsByClassName("table-key-cols");

let rows = 1;
let cols = 1;

for (let i = 0; i < tableKeyCols.length; i++) {
    tableKeyCols[i].textContent = cols;
}
tableKeyRows.textContent = rows;

minusRowBtn.disabled = true;
minusColBtn.disabled = true;

const addRow = () => {
    minusRowBtn.disabled = false;
    rows++;
    for (let i = 0; i < tableKeyCols.length; i++) {
        tableKeyCols[i].textContent = cols;
    }
    tableKeyRows.textContent = rows;
    let row = document.createElement('tr');
    row.className = "tableRow";
    for (let i = 1; i <= cols; i++) {
        let data = document.createElement('td')
        data.className = `tableCol-${i}`;
        data.textContent = "R" + rows + " | C" + i;
        row.appendChild(data);
    }
    tableBody.appendChild(row);
    if (rows <= 1) {
        minusRowBtn.disabled = true;
    }
    if (rows >= 10) {
        plusRowBtn.disabled = true;
    }
}

const addCol = () => {
    minusColBtn.disabled = false;
    cols++;
    for (let i = 0; i < tableKeyCols.length; i++) {
        tableKeyCols[i].textContent = cols;
    }
    tableKeyRows.textContent = rows;
    let headRow = tableHead.getElementsByTagName("tr");
    for (let i = 0; i < headRow.length; i++) {
        let dataHead = document.createElement('th');
        dataHead.className = `tableHeading-${cols}`;
        dataHead.textContent = "Heading " + cols;
        headRow[i].appendChild(dataHead);
    }
    let allRows = tableBody.getElementsByTagName("tr");
    for (let i = 1; i <= allRows.length; i++) {
        let data = document.createElement('td');
        data.className = `tableCol-${cols}`;
        data.textContent = "R" + i + " | C" + cols;
        allRows[i-1].appendChild(data);
    }
    if (cols <= 1) {
        minusColBtn.disabled = true;
    }
    if (cols >= 5) {
        plusColBtn.disabled = true;
    }
}

const deleteRow = () => {
    plusRowBtn.disabled = false;
    if (rows > 1) {
        rows--;
        for (let i = 0; i < tableKeyCols.length; i++) {
            tableKeyCols[i].textContent = cols;
        }
        tableKeyRows.textContent = rows;
        const tableRows = document.getElementsByClassName("tableRow");
        tableRows[tableRows.length-1].parentNode.removeChild(tableRows[tableRows.length-1]);
    }
    if (rows <= 1) {
        minusRowBtn.disabled = true;
    }
    if (rows >= 10) {
        plusRowBtn.disabled = true;
    }
}

const deleteCol = () => {
    plusColBtn.disabled = false;
    if (cols > 1) {
        let tableCols = document.getElementsByClassName(`tableCol-${cols}`);
        let headerCols = document.getElementsByClassName(`tableHeading-${cols}`);
        while (tableCols.length > 0){
            tableCols[0].parentNode.removeChild(tableCols[0]);
        }
        while (headerCols.length > 0){
            headerCols[0].parentNode.removeChild(headerCols[0])
        }
        cols--;
        for (let i = 0; i < tableKeyCols.length; i++) {
            tableKeyCols[i].textContent = cols;
        }
        tableKeyRows.textContent = rows;
    }
    if (cols <= 1) {
        minusColBtn.disabled = true;
    }
    if (cols >= 5) {
        plusColBtn.disabled = true;
    }
}

const setDisplay = (value) => {
    document.getElementById("tableHead").style.display = value;
    tableKeyHeading.style.display = value;
};

minusRowBtn.addEventListener("click", deleteRow);
plusRowBtn.addEventListener("click", addRow);
minusColBtn.addEventListener("click", deleteCol);
plusColBtn.addEventListener("click", addCol);
onButton.addEventListener("click", () => setDisplay(""));
offButton.addEventListener("click", () => setDisplay("none"));