/* 
Write a JavaScript function to get the month end date.
*/

function monthEndDate(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day });
  // Get last day of that month
  const lastDay = date.with({ day: date.daysInMonth });
  return lastDay.toString()
}

console.log(monthEndDate(2025, 9, 23));