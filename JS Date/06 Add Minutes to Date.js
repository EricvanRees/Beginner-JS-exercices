/* 
Write a JavaScript function to add specified minutes to a Date object.
*/


function addMinutes(mins) {
  const result = Temporal.Now.plainDateTimeISO()
	.add({minutes: `${mins}`})
	.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' });

  return result;
}

console.log(addMinutes(60));

