/* 
Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
*/

function lower_am_or_pm(timestr) {
  // convert hours and minutes to temporal obj
  const time = Temporal.PlainTime.from(timestr).toString();
  // get postfix "am" or "pm" 
  const ampm = time.hour < 12 ? "am" : "pm";
  // join both components and cut off seconds so that only hours and minutes are logged
  return `${time.slice(0, 5)} ${ampm}` 
}

console.log(lower_am_or_pm("15:55"));

