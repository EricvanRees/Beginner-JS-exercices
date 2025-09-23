/* 
Write a JavaScript function to get the week end date.
*/

function weekEndDate(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day});
  if (date.dayOfWeek === 7) {
    return date.toString()
  } else if (date.dayOfWeek === 1) {
    return date.add({days: 6}).toString()
  } else if (date.dayOfWeek === 2) {
    return date.add({days: 5}).toString()
  } else if (date.dayOfWeek === 3) {
    return date.add({days: 4}).toString()
  } else if (date.dayOfWeek === 4) {
    return date.add({days: 3}).toString()
  } else if (date.dayOfWeek === 5) {
    return date.add({days: 2}).toString()
  } else {
    return date.add({days: 1}).toString()
  }
}

console.log(weekEndDate(2025, 9, 28));
