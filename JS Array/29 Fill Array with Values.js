/*
Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

Test Data :

console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/

function createStr(firstLetter, lastLetter, anInt) {
  let finalArr = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arraySlice = Array.from(alphabet);
  let slicedArr = arraySlice.slice(arraySlice.indexOf(firstLetter), arraySlice.indexOf(lastLetter) + 1);
  for (let i = 0; i < slicedArr.length; i+=anInt) {
    finalArr.push(slicedArr[i]);
  }
  return finalArr;
}

console.log(createStr('a', "z", 2));