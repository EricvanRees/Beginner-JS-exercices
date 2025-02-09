/* 85. Split Array into Two Sums Alternating Elements

Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.   */


const elIsInt = (el) => Number.isInteger(el);

function splitArr(anArray) {
  let firstPart = 0;
  let secondPart = 0;
  let sumOfTwoParts = [];
  if (Array.isArray(anArray) && anArray.every(elIsInt)) {
    for (let i = 0; i < anArray.length; i++) {
      if (i % 2 === 0) {
        secondPart += anArray[i];
      } else {
        firstPart += anArray[i];
      }
    }
    sumOfTwoParts.push(firstPart);
    sumOfTwoParts.unshift(secondPart);
    return sumOfTwoParts;
  } 
  else {
    return false;
  }
}

console.log(splitArr([1,2,3,4,5]));
