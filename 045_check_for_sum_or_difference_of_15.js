/* 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.   */ 

// randomly generate two integers between 1 and 20
let val1 = Math.floor(Math.random() * 20) + 1;
let val2 = Math.floor(Math.random() * 20) + 1;

function check(val1, val2) {
  // log the two values to check if the function works correctly
  console.log(val1, val2);
  return (val1 === 15 || val2 === 15 || val1 + val2 === 15 || val1 - val2 === 15);
}

console.log(check(val1, val2));