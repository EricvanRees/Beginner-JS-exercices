/* 
Write a JavaScript function to count the number of days passed since the year began.

Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

function days_passed(year, amonth, aday) {
  // get first day of the current date
  const start = Temporal.PlainDate.from({ year, month: 1, day: 1 });
  // get second date
  const secondDate = Temporal.PlainDate.from({year, month: amonth, day: aday});
  // Get the difference in days
  const total_days_passed = secondDate.since(start, { largestUnit: "days" }).days;

  return total_days_passed;
}

console.log(days_passed(2017, 12, 31)); // 364