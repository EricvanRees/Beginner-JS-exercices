/* 
Write a JavaScript function to get a full textual representation of the weekday (Sunday through Saturday).
Test Data :
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
"Sunday"
*/

function full_weekday(year, month, day) {
  const date = Temporal.PlainDate.from({ year, month, day});
  
  // Use Intl.DateTimeFormat to get the weekday name
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(date);
  return weekday
}

console.log(full_weekday(2015, 10, 1));