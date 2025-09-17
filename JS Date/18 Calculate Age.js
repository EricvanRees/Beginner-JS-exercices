/* 
Write a JavaScript program to calculate age.

Test Data :
console.log(calculate_age(new Date(1982, 11, 4)));
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

function calculate_age(year, month, day) {
  // get current date
  const date = Temporal.Now.plainDateISO(); // Gets the current date
  // get second date
  const birth_date = Temporal.PlainDate.from({year, month, day});
  // Get the difference in years
  const total_years_passed = date.since(birth_date, { largestUnit: "years" }).years;
  return total_years_passed;
}

console.log(calculate_age(1980, 5, 2));
console.log(calculate_age(1962, 1, 1));
