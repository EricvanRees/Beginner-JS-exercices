
let parag = document.querySelector("p");

let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');

function changeRed() {
  parag.style.backgroundColor = 'red';
}

function changeBlue() {
  parag.style.backgroundColor = 'blue';
}

function changeGreen() {
  parag.style.backgroundColor = 'green';
}

function changeYellow() {
  parag.style.backgroundColor = 'yellow';
}



red.addEventListener('click', changeRed);
blue.addEventListener('click', changeBlue);
green.addEventListener('click', changeGreen);
yellow.addEventListener('click', changeYellow);