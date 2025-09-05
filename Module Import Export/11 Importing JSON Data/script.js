/* 
Write a JavaScript program to import a JSON file as a module and access its properties.
*/

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    console.log(data.menu.popup.menuitem[0].value); // "New"
    console.log(data.menu.popup.menuitem[1].value); // "Open"
    console.log(data.menu.popup.menuitem[2].value); // "Close"
  });