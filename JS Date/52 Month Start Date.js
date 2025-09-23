/* 
Write a JavaScript function to get the month's start date.
*/

function monthStartDate(year, month) {
  const date = Temporal.PlainDate.from({ year, month, day: 1});
  return `${date.toLocaleString("en-US", { weekday: "long" })} ${date.toString()}`
}

console.log(monthStartDate(2025, 9));
