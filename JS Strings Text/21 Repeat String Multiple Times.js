/* 
Write a JavaScript function to repeat a string for a specified time.

Test Data :

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
*/

function repeat_string(astr, anint) {
  return (typeof astr === 'string' && Number.isInteger(anint))? astr.repeat(anint) : "Error in string or count";
}

console.log(repeat_string('a', 4));