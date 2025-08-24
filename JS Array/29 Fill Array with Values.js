/*
Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

Test Data :

console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// solution using a for loop:
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

// solution using forEach:
// modifies original array
function createStr(firstLetter, lastLetter, anInt) {
  let final = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arraySlice = Array.from(alphabet);
  let slicedArr = arraySlice.slice(arraySlice.indexOf(firstLetter), arraySlice.indexOf(lastLetter) + 1);
  slicedArr.forEach((item, index) => {
    if (index % anInt === 0) {
      final.push(item);
    }
  })
  return final; 
}

// solution using reduce:
function createStr(firstLetter, lastLetter, anInt) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arraySlice = Array.from(alphabet);
  let slicedArr = arraySlice.slice(arraySlice.indexOf(firstLetter), arraySlice.indexOf(lastLetter) + 1);
  return slicedArr.reduce((acc, letter, index) => {
    if (index % anInt === 0) {
      acc.push(letter);
    }
    return acc;
  }, []);
}

// Solution using filter:
// This solution is the most compact for solving this particular problem
function createStr(firstLetter, lastLetter, anInt) {
  let finalArr = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arraySlice = Array.from(alphabet);
  let slicedArr = arraySlice.slice(arraySlice.indexOf(firstLetter), arraySlice.indexOf(lastLetter) + 1);
  const final = slicedArr.filter((item, index) => index % anInt === 0);
  return final;
}

*/

// solution using map
// map does not modify original array, returns new array
// you need to use filter after using map to filter values equal to undefined
function createStr(firstLetter, lastLetter, anInt) {
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arraySlice = Array.from(alphabet);
  let slicedArr = arraySlice.slice(arraySlice.indexOf(firstLetter), arraySlice.indexOf(lastLetter) + 1);
  let final = slicedArr.map((item, index) => {
    if (index % anInt === 0) {
      return item;
    } else {
      // do nothing
    }
  })
  .filter((item) => item !== undefined)
  return final;
}

console.log(createStr('a', "z", 2));