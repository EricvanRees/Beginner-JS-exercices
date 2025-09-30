/* 
Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
*/

function checkForEmptyArr(anArray) {
  // Check if the array is emtpy using array.length
  if (anArray.length === 0) 
  {
    // If the array is empty, throw an error 
    throw new Error('Array is empty. Please pass in an array with items.');
  }
  // Log a message indicating that the array is not empty
  console.log("Array is not empty.");
}

try {
  checkForEmptyArr([1,2,3]);  
} catch (error) {
  console.log(error);
}