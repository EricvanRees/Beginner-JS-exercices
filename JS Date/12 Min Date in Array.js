/* 
Write a JavaScript function to get the minimum date from an array of dates.

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/

const { PlainDate } = Temporal;

const dates = [
  PlainDate.from('2015-02-01'),
  PlainDate.from('2015-02-02'),
  PlainDate.from('2015-01-03'),
];

// Sort ascending
dates.sort((a, b) => PlainDate.compare(a, b));
// only return the first item
console.log(dates.map(d => d.toString())[0]);