/* 
Write a JavaScript function to add specified years to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
*/

function add_years(years) {
  const date = Temporal.Now.plainDateISO();
  const newDate = date.add({ years: `${years}` }); 
  return newDate.toLocaleString("en-US");
}

console.log(add_years(10));