/* 
Write a JavaScript function to alphabetize a given string.

Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
*/

function alphabetize_string(aStr) {
  return aStr.split('').sort().filter((item) => item !== ' ').join('');
}

console.log(alphabetize_string('United States'));