/* 
Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.
*/

function checkForEmptyStr(aStr) {
  // Check if the string is emtpy using str.length
  if (aStr.length === 0) 
  {
    // If the str is empty, throw an error 
    throw new Error('String is empty.');
  }
  // Log a message indicating that the string is not empty
  console.log("String is not empty.");
}

try {
  checkForEmptyStr('lll');  
} catch (error) {
  console.log(error);
}