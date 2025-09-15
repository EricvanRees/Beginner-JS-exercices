/* 
Write a JavaScript function to get the current date.
*/

// source: https://tc39.es/proposal-temporal/docs/cookbook.html#current-date-and-time 

const date = Temporal.Now.plainDateISO(); // Gets the current date
console.log(date.toString().replaceAll('-', '/')); // returns the date in ISO 8601 date format