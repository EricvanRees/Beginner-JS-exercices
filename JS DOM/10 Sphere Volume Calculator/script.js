/* 
Write a JavaScript program to calculate sphere volume.

Formula to calculate sphere of a volume: 
V = 4/3 * pi * r3

*/

let inputVal = document.getElementById('radius');
let outputVal = document.getElementById('volume')

function calculate() {
  let radius = inputVal.value;
  let radiusExp = Math.pow(radius, 3);
  let vol = 4/3 * Math.PI * radiusExp;
  let toFixed = vol.toFixed(4);
  outputVal.value = toFixed;
}

