/* 
Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_months(dt));
"Nov"
*/

function getShortMonthName(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" })
  .format(date);
  return monthName.slice(0, 3)
}

console.log(getShortMonthName(2015, 10, 1));