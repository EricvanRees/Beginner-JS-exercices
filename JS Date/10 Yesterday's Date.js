/* 
Write a JavaScript function to calculate 'yesterday's day.
*/

function yesterday(anydate) {
  const date = Temporal.PlainDate.from(anydate);
  const daybefore = date.subtract({ days: 1 }).toString();
  return daybefore;
}

console.log(yesterday("2025-09-15"));