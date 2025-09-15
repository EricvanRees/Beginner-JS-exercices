/* 
Write a JavaScript function to get the last day of a month.

Test Data :
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31
*/

// last day is same as total days in month
function lastday(year, month) {
  const day = "01"
  const dateStr = [year, month, day].join("-");
  const date = Temporal.PlainDate.from(dateStr);
  
  return date.daysInMonth;
}

console.log(lastday("2025", "09"));

