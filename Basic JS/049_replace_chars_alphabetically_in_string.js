/* 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
 */

function nextLetter(aString) {
  let myString = "abcdefghijklmnopqrstuvwxyz";
  let newStr = '';
  if (typeof(aString === 'string')) {
    aString = aString.toLowerCase();
    for (let i = 0; i < aString.length; i++) {
      if (myString.includes(aString[i])) {
        newStr += myString.charAt((myString.indexOf(aString[i]) + 1)); 
      }
    }
    return newStr;
  }
  else {
    return false;
  }
}

console.log(nextLetter("hijkl"));
