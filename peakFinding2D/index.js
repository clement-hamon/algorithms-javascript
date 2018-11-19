import peakFinding2D from './peakFinding2D.js';

const columns = 10;
const rows = 5;

const arr = generate2DArray(columns, rows);

const peak = peakFinding2D(arr);

console.log(arr, peak);


// HELPER FUNCTION
function generate2DArray(m, n) {
    let arr = [];
    while (m > 0) {
        arr.push(generateArray(n));
        m--;
    }
    return arr;
}

function switchColRow(array) {
    return array[0].map((col, i) => array.map(row => row[i]));
}


/// HTML DISPLAY

const htmlFormatedArr = switchColRow(arr.slice(0));

const table = document.getElementById('table');

for (let i = 0; i < htmlFormatedArr.length; i++) {
    let tr = document.createElement("tr");

    const row = htmlFormatedArr[i];
    for (let j = 0; j < row.length; j++) {
        let td = document.createElement("td");
        let num = document.createTextNode(row[j]);
        td.appendChild(num);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let d = table.getElementsByTagName("tr")[peak.n];
let r = d.getElementsByTagName("td")[peak.m];

r.setAttribute('style', 'background-color:blue');