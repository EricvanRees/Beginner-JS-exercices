/* 74. Set All Elements to Largest of First/Last in Array

Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.  
 */

function sortArr(myArr) {;
  let arrCopy = [...myArr];
  myArr.sort();
  let largestVal =  myArr[myArr.length -1];
  return arrCopy.fill(largestVal, 1, -1);
}

console.log(sortArr([9, 4, 5, 3, 2, 1]));
