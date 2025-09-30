/* 
Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
*/

function checkInt(number) {
  // Check if the given number is not an integer using Number.isInteger() method
  if (!Number.isInteger(number)) 
  {
    // If the number is not an integer, throw an error 
    throw new Error('Invalid number. Please input an integer.');
  }
  // Log a message indicating that the number is valid
  console.log(`${number} is a valid number.`);
}

try {
  checkInt(9.08);  
} catch (error) {
  console.log(error);
}

try {
  checkInt(9);  
} catch (error) {
  console.log(error);
}

