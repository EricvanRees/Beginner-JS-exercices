/* 
Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.
*/

function manageJSON(jsonStr) {
  try {
    const parsedData = JSON.parse(jsonStr);
    console.log(`${parsedData} string is valid JSON`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('SyntaxError:', error.message);
    } else { 
      console.log('Error: ', error.message);
    }
  }
}

const json = '{result":true, "count":42}';

try {
  manageJSON(json);
  } catch (error) {
  console.log(error);
}
