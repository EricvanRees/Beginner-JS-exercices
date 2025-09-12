/* 
Write a JavaScript program that demonstrates event bubbling and uses stopPropagation to stop the event at a specific level.
*/

function function1() {
  alert("Div 1 was clicked");
}

function function2() {
  alert("Div 2 was clicked");
}

function function3(event) {  
  event.stopPropagation();
  alert("h1 was clicked");
}