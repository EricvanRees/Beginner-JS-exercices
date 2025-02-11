/* 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  */


// source: https://www.30secondsofcode.org/js/s/days-in-month/

function leapyear(year) {
  if (Number.isInteger(year)) {
    return new Date(year, 2, 0).getDate() == 29 ? `${year} is a leap year` : `${year} is not a leap year`;
  }
  else {
    return false;
  }
}

console.log(leapyear(2025));
console.log(leapyear(2012));
console.log(leapyear(2010));

