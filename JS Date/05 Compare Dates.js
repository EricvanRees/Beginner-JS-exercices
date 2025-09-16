/* 
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
*/

function compareDates(date1, date2) {
const result = Temporal.PlainDateTime.compare(
	Temporal.PlainDate.from(date1),
	Temporal.PlainDate.from(date2),
  );
  if (result === 0) {
    return "dates are equal"
  } else if (result === 1) {
    return "date 1 > date 2"
  } else {
    return "date 1 < date 2"
  }
}

console.log(compareDates('2022-12-30', '2022-12-31')); // -1
console.log(compareDates('2022-12-31', '2022-12-30')); // 1
console.log(compareDates('2022-12-31', '2022-12-31'));  // 0



