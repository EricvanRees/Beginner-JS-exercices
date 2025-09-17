/* 
Write a JavaScript function to get the number of days in a year.

Test Data :
console.log(days_of_a_year(2015));
365
console.log(days_of_a_year(2016));
366
*/

function days_of_a_year(year) {
  // Start of the year
  const start = Temporal.PlainDate.from({ year, month: 1, day: 1 });

  // Start of the next year
  const nextYear = start.add({ years: 1 });

  // Get the difference in days
  const daysInYear = nextYear.since(start, { largestUnit: "days" }).days;

  return daysInYear;
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));

