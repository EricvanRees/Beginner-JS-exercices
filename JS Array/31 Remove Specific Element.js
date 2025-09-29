/* 
Write a JavaScript function to remove a specific element from an array.

Test data :

console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/


function filterArr(anArr, anInt) {
  const result = anArr.filter((el) =>
    el !== anInt)
  return result;
}

console.log(filterArr([2, 5, 9, 6], 5)); // logs [2, 6, 9]



