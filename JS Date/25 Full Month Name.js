/* 
Write a JavaScript function to get a full text representation of a month, such as January or June.
Test Data :
dt = new Date(2015, 10, 1);
console.log(full_month(dt));
"November"
*/

function getFullMonthName(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" })
  .format(date);
  return monthName
}

console.log(getFullMonthName(2015, 10, 1));