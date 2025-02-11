/* 79. Check if Array Contains 30 and 40 Twice

Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.   */


function checkArray(anArray) {
  if (Array.isArray(anArray) && anArray.length <= 2) {
    let numCount = anArray.filter(x => x === 30 || x === 40).length;
    if (numCount === 2) {
      console.log("array contains 30 or 40 twice");
    }
    else {
      console.log("array does not contain 30 or 40 twice");
    }
  }
  else {
    console.log("array has more than 2 items");
  }
}

checkArray([30, 30]);
checkArray([40, 40]);
checkArray([30, 30, 30]);
checkArray([30, 30, 30, 30]);
