/* 80. Swap First and Last Elements in Array

Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1. */  

function arraySwap(anArray) {
  
  if (Array.isArray(anArray) && anArray.length >= 1) {
    if (anArray.length === 1) {
      return anArray;
    } else if (anArray.length === 2) {
      let lastEl = anArray.pop();
      anArray.unshift(lastEl);
      return anArray;
    } else {
      let slicedArr = anArray.slice(1, -1);
      let lastEl = anArray.pop();
      let firstEl = anArray.shift();
      slicedArr.unshift(lastEl)
      slicedArr.push(firstEl);
      return slicedArr;
    }
  }
  else {
    return false;
  }
}

console.log(arraySwap([1]));
console.log(arraySwap([1,2]));
console.log(arraySwap([1,2,3]));
console.log(arraySwap([1,2,3,4]));
console.log(arraySwap([1,2,3,4,5]));
