/* 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  */ 

function checkDigits(a, b, c) {
  // get last digit of each float
  let lastDigitA = a.toString().slice(-1);
  let lastDigitB = b.toString().slice(-1);
  let lastDigitC = c.toString().slice(-1);
  // convert digit from string to integer and compare them using a ternary operator 
  return Number(lastDigitA) === Number(lastDigitB) || Number(lastDigitB) === Number(lastDigitC) || Number(lastDigitA) === Number(lastDigitC) ? true : false;
}


console.log(checkDigits(3.900, 3.999, 4.000));
console.log(checkDigits(3.9, 3.9, 4.0));