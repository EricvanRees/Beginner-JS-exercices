/* 
Write a JavaScript function to add specified months to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());
Output :
"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
*/

function add_months(months) {
  const date = Temporal.Now.plainDateISO();
  const newDate = date.add({ months: `${months}` }); 
  return newDate.toLocaleString("en-US");
}

console.log(add_months(4));