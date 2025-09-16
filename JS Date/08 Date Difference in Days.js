/* 
Write a JavaScript function to get the difference between two dates in days.
*/

function dateDiff(d1, d2) {
  const date1 = Temporal.PlainDate.from(d1);
const date2 = Temporal.PlainDate.from(d2);

// Difference in days
const diffDays = date2.since(date1, { largestUnit: 'days' });

return `Difference is ${diffDays.days} day(s)`; 
}

console.log(dateDiff('2022-12-30', '2022-12-31'));
