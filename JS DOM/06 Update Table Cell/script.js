/* 6. Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
 */

let table = document.getElementById('myTable');

function changeContent(rn=1, cn=1, content="Content") {
  let x = table.rows[rn].cells;
  x[cn].innerHTML=content;
}