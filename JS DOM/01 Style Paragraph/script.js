/* 1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
Clicking on the button the font, font size, and color of the paragraph text will be changed. */

let par = document.getElementById("text");
let btn = document.getElementById("jsstyle");
btn.addEventListener("click", js_style);

function js_style() {
  par.style.fontWeight = "bold";
  par.style.fontSize = "x-large";
  par.style.fontFamily = "Impact,Charcoal,sans-serif";
  par.style.color = 'blue';
} 
