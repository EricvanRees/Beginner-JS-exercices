/* 
Write a JavaScript program to handle click events on dynamically added list items using event delegation.
*/

const myList = document.querySelector('ul');

// When any list item is clicked, including any dynamically added list item, innerText is logged onto the console. The event listener is placed on the ul, not the individual list items 
myList.addEventListener("click", (event) => {
  if(event.target.tagName === 'LI') {
    console.log(event.target.innerText)
  }
})

function addItem() {
  let li = document.createElement("li");
  li.innerText = "new li";
  myList.appendChild(li);
}