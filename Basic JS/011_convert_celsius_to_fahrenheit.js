/* 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function celToFah(cel) {
  if (Number.isInteger(cel)) {
    let fah = (cel * 9/5) + 32;
    return fah;
  }
  else {
    return false;
  }
}

function fahToCel(fah) {
  if (Number.isInteger(fah)) {
    let cel = (fah - 32) * 5/9;
    return cel;
  }
  else {
    return false;
  }
}

console.log(celToFah(60));
console.log(fahToCel(45)); 