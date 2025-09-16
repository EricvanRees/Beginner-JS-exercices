/* 
Write a JavaScript function that returns the number of minutes in hours and minutes.

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

// resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
function balanceMinutes(duration) {
  const { hours, minutes } = duration;
  const totalMinutes = hours * 60 + minutes;
  const balancedMinutes = totalMinutes % 60;
  const balancedHours = (totalMinutes - balancedMinutes) / 60;
  return duration.with({ hours: balancedHours, minutes: balancedMinutes });
}

function timeConvert(minutes, hours=0) {
const d1 = Temporal.Duration.from({hours: hours, minutes: minutes });
const d2 = balanceMinutes(d1);
return `${minutes} minutes = ${d2.hours} hours and ${d2.minutes} minutes.`
}

console.log(timeConvert(200));

