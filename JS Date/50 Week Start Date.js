/* 
Write a JavaScript function to get the week's start date.
*/

function weekStartDate(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day});
  if (date.dayOfWeek === 1) {
    return date
  } else if (date.dayOfWeek === 2) {
    return date.subtract({days: 1}).toString()
  } else if (date.dayOfWeek === 3) {
    return date.subtract({days: 2}).toString()
  } else if (date.dayOfWeek === 4) {
    return date.subtract({days: 3}).toString()
  } else if (date.dayOfWeek === 5) {
    return date.subtract({days: 4}).toString()
  } else if (date.dayOfWeek === 6) {
    return date.subtract({days: 5}).toString()
  } else {
    return date.subtract({days: 6}).toString()
  }
}

console.log(weekStartDate(2025, 9, 28));

