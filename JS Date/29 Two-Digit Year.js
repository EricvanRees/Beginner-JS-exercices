/* 
Write a JavaScript function to get a two-digit year representation.
Examples : 79 or 04
Test Data :
dt = new Date(1989, 10, 1);
console.log(sort_year(dt));
"89"
*/

function short_year(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  const year_num = date.year
  return year_num.toString().slice(2, )
}

console.log(short_year(1989, 10, 1));