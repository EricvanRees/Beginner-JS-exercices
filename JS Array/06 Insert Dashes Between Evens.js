/* 6. Insert Dashes Between Evens

Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8. */

function insertDashes(aNumber) {
  if (Number.isInteger(aNumber)) {
    let digits = aNumber.toString().split("");
    console.log(digits);    
  }
  else {
    return false
  }
}

console.log(insertDashes(123));
