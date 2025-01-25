/* 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.  */


function calcHoursMins(value) {
  if (Number.isInteger(value)) {
    let hours = Math.floor(value / 60);
    let minutes = value % 60; 
    return `A value of ${value} makes ${hours} hours and ${minutes} minutes.`
  }
  else {
    return false;
  }
}

console.log(calcHoursMins(62));