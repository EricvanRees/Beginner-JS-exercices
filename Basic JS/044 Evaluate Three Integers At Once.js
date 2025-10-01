/* 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  */  

function evaluateInts(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    return ((a >= 20 || b >= 20 || c >= 20 ) && ((a < b || a < c) || (b < c || b < a) || (c < a || c < b))) ? true : false;
  }
  else {
    return false;
  }
}

console.log(evaluateInts(21, 22, 23)); // true
console.log(evaluateInts(18, 19, 1)); // false
console.log(evaluateInts(19, 19, 19)); // false 
console.log(evaluateInts(20, 20, 20)); // false
