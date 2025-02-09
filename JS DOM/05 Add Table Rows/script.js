/* 5. Write a JavaScript function to add rows to a table.
 */

function insert_Row() {

  let tableRef = document.getElementById('sampleTable');

  let newRow = tableRef.insertRow(-1);
  let newCell1 = newRow.insertCell(0);
  let newCell2 = newRow.insertCell(1);
  let newText1 = document.createTextNode("Row3 cell1");
  let newText2 = document.createTextNode("Row3 cell2");
  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
}