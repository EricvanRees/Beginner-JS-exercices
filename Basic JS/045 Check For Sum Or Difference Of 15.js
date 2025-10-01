/* 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.   */ 

/* // randomly generate two integers between 1 and 20
let val1 = Math.floor(Math.random() * 20) + 1;
let val2 = Math.floor(Math.random() * 20) + 1; */

function check(val1, val2) {
  return (val1 === 15 || val2 === 15 || val1 + val2 === 15 || val1 - val2 === 15);
}

console.log(check(5, 10)); // true
console.log(check(30, 15)); // true
console.log(check(5, 5)); // false
