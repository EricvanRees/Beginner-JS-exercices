/* 
Write a JavaScript script to empty an array while keeping the original.
*/
 
function emptyArr(anArr) {
  let copyArr = [...anArr];
  return copyArr = [];
}

console.log(emptyArr([1,2,3]));