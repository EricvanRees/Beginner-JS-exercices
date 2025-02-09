/* 73. Reverse Elements of Array (Length 3)

Write a JavaScript program to reverse the elements of a given array of integers of length 3.   */

function reverseArr(myArr) {
  let copyOfArr = [...myArr];
  let myNewArr;
  if (myArr.length === 3) {
    return copyOfArr.reverse(); 
  } else  {
    return false;
  }
}

console.log(reverseArr([1,2,3])); 