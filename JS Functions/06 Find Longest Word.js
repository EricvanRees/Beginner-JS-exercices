/* 6. Find Longest Word

Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function findLongestWord(aStr) {
  // define empty array for sorted words
  let newArr = [];
  // split string into separate words
  newArr = aStr.split(" ");
  // compare length of individual words
  let result = newArr.sort((a, b) => 
    b.length - a.length)
  // return the first word of the resulting array
  return result[0];
} 

// as arrow function:
const longestword = aStr => {
  let newArr = [];
  newArr = aStr.split(" ");
  let result = newArr.sort((a, b) => 
    b.length - a.length)
  return result[0];
}

console.log(findLongestWord("Web Development Tutorial")); // logs "Development"
console.log(longestword("Web Development Tutorial")); // logs "Development"

