/* 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.   */

// randomly generate two integers between 1 and 100
let val1 = Math.floor(Math.random() * 100) + 1;
let val2 = Math.floor(Math.random() * 100) + 1;

function check1(val1, val2) {
  return ((val1 % 7 === 0 || val1 % 11 === 0) || (val2 % 7 === 0 || val2 % 11 === 0));
}

console.log(check1(val1, val2));
