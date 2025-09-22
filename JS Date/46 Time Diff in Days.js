/* 
Write a JavaScript function to get time differences in days between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
6
*/

function diff_days(d1, d2) {
  const diff = d2.since(d1, { largestUnit: 'days' });
  return `Difference in days is ${diff.days}`;
}

const d1 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 6,
  hour: 15,
  minute: 17,
  second: 0,
}); 

const d2 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 7,
  hour: 15,
  minute: 17,
  second: 0,
}); 

console.log(diff_days(d1, d2));