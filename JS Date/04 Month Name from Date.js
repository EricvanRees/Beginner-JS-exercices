/* 
Write a JavaScript function to get the month name from a particular date.

Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"
*/

const date = Temporal.PlainDate.from("2025-09-15");
console.log(
  date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" }),
); // "September"