/* 
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

Sample array : [1,2,3,4,5]

Expected Output : 2,4
*/

/* function findVals(anArray) {
  const newArr =  anArray.sort();
  sec_minVal = newArr[1];
  sec_maxVal = newArr[newArr.length - 2];
  return new Object({sec_minVal, sec_maxVal});
} */

// written as arrow function:
const findVals = anArray => {
  const newArr =  anArray.sort();
  sec_minVal = newArr[1];
  sec_maxVal = newArr[newArr.length - 2];
  return new Object({sec_minVal, sec_maxVal});
}

const myArr = [1,2,3,4,5];
console.log(findVals(myArr));