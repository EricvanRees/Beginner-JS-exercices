/* 69. Sum of 3 Elements in Array (Length 3)

Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. */


function mySum(myArr) {
  if (myArr.length === 3) {
    let total = 0;
  myArr.forEach(element => {
    total += element;   
  });
  return total;
  }
  else {
    return false;
  }
}
 
console.log(mySum([300, 1, 2]));

// same functionality but using a for loop:
function alsoSum(myArr) {
  let total = 0;
  if (myArr.length === 3) {
    for (let i = 0; i <= myArr.length - 1; i++) {
      total += myArr[i];
    }
    return total;
  }
  else {
    return false;
  }
}

console.log(alsoSum([1, 3, 3, 5]));
