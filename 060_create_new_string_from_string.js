/* 60. Write a JavaScript program to create a new string without the first and last characters of a given string.   */

let myStr = "AbcdefhjijklD";

function createNewStr(myStr) {
  let newStr = myStr.slice(0, 1).concat(myStr.slice(-1));
  return newStr;
}

console.log(createNewStr(myStr));