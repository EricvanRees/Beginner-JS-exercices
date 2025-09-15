/* 
Write a JavaScript function to test whether a date is a weekend.

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined
*/

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek

function is_weekend(dateStr) {
  const date = Temporal.PlainDate.from(dateStr);
  return date.dayOfWeek === 6 || date.dayOfWeek === 7? "weekend" : "week day" 
}

console.log(is_weekend('2014-11-15'));
console.log(is_weekend('2014-11-16'));
console.log(is_weekend('2014-11-17'));