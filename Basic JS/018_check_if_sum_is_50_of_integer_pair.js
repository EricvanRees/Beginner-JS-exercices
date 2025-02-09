/* 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.    */

function check(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return (a === 50 || b === 50) || (a + b === 50)? true : false;
  }
  else {
    return false;
  }
}

console.log(check(50, 40));
console.log(check(25, 20));
