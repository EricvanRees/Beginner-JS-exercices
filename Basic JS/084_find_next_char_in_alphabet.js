/* 84. Replace Characters with Next in Alphabet

Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'. */


let alphabet = "abcdefghijklmnopqrstuvwxyz";

function alphabetStr(aString) {
  let returnString = "";
  if (typeof(aString) === 'string') {
    let newString = aString.toLowerCase();
    for (let i = 0; i < newString.length; i++) {
      if (aString[i] === 'z') {
        returnString += 'a';
      } else {
        returnString += alphabet[alphabet.indexOf(newString[i]) + 1];
      }
    }
  }
  return returnString;
}

console.log(alphabetStr("kkkkppprrrz"));