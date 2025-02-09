/* 83. Find Longest String in Array

Write a JavaScript program to find the longest string from a given array of strings. */

// helper function to check for string type for each array element
const elIsString = (el) => typeof(el) === 'string';

function findLongestString(anArray) {
  if (Array.isArray(anArray) && anArray.every(elIsString)) {
    // return the longest string in array
    return anArray.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    })
  } else {
    return false;
   } 
}

console.log(findLongestString(['aaa', 'bbbbbb', "ccc"]));