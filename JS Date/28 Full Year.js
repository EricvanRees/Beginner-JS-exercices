/* 
Write a JavaScript function to get a full numeric representation of a year (4 digits).
Test Data :
dt = new Date(2015, 10, 1);
console.log(full_year(dt));
2015
*/

function numeric_year(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  const year_num = date.year
  return year_num
}

console.log(numeric_year(2015, 10, 1));