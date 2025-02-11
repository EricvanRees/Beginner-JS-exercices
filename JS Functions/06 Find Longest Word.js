/* 6. Find Longest Word

Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function longestword(aStr) {
  let newArr = [];
  newArr = aStr.split(" ");
  console.log(newArr);
  let result = newArr.sort((a, b) => 
    b.length - a.length)
  return result[0];
}

console.log(longestword("Web Development Tutorial"));

