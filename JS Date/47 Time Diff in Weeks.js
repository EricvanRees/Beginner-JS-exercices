/* 
Write a JavaScript function to get time differences in weeks between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));
18
*/

function diff_weeks(d1, d2) {
  const diff = d2.since(d1, { largestUnit: 'weeks' });
  return `Difference in weeks is ${diff.weeks}`;
}

const d1 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 11,
  day: 7,
  hour: 15,
  minute: 17,
  second: 0,
}); 

const d2 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 14,
  hour: 18,
  minute: 17,
  second: 0,
}); 

console.log(diff_weeks(d1, d2));