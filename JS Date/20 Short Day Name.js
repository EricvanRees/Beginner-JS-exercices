/* 
Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
"Sun"
*/

function shorten_day(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day});
  
  // Use Intl.DateTimeFormat to get the weekday name
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(date);
  // return only 3 letters of day
  return weekday.slice(0, 3);
}

console.log(shorten_day(2015, 10, 1));