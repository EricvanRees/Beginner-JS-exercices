/* 7. Sort Array

Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

function sortArr(anArr) {
  if (Array.isArray(anArr) && anArr.every(el => Number.isInteger(el) === true)) {
    return anArr.sort();
  }
  else {
    return false;
  }
}

console.log(sortArr([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));