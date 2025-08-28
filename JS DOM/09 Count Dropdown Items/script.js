/* 
Write a JavaScript program to count and display dropdown list items in an alert window.
*/

function getOptions() {
  const items = document.querySelectorAll('option');
  let myArr = []
  items.forEach(item => {
    myArr.push(item.innerText);
  })
  alert(`${myArr}, length: ${myArr.length}`);
}