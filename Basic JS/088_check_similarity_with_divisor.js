/* 88. Check Similarity of Two Integers with Divisor

Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.  */ 


function checkSimilarity(int1, int2, divisor) {
  if (Number.isInteger(int1) && Number.isInteger(int2)) {
    if (int1 % divisor === 0 && int2 % divisor === 0) {
      return "integers are equal";
    }
    else {
      return "integers are not equal";
    }
  }
  else {
    return false;
  }
}

console.log(checkSimilarity(2, 8, 2));
console.log(checkSimilarity(20, 8, 4));
console.log(checkSimilarity(22, 33, 11));
console.log(checkSimilarity(20, 8, 10));
console.log(checkSimilarity(21, 8, 3));
console.log(checkSimilarity(20, 4, 10));
