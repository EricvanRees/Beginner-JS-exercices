/* 
Write a JavaScript function to get time differences in months between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
5
*/

function diff_months(d1, d2) {
  const diff = d2.since(d1, {largestUnit: 'months' });
  return `Difference in months is ${diff.months}`;
}

const d1 = Temporal.PlainDateTime.from({
  year: 1995,
  month: 10,
  day: 7,
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

console.log(diff_months(d1, d2));