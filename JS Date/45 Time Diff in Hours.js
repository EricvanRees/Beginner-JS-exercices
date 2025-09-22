/* 
Write a JavaScript function to get time differences in hours between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
3
*/

function diff_hours(d1, d2) {
  const diff = d2.since(d1, { largestUnit: 'hours' });
  return `Difference in hours is ${diff.hours}`;
}

const d1 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 7,
  hour: 15,
  minute: 17,
  second: 0,
}); 

const d2 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 7,
  hour: 18,
  minute: 17,
  second: 0,
}); 

console.log(diff_hours(d1, d2));