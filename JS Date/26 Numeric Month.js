/* 
Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).
Test Data :
dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));
"11"
*/

function numeric_month(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  const month_num = date.month
  return month_num
}

console.log(numeric_month(2015, 10, 1));