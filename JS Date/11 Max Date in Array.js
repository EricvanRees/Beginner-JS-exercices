/* 
Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

const { PlainDate } = Temporal;

const dates = [
  PlainDate.from('2015-02-01'),
  PlainDate.from('2015-02-02'),
  PlainDate.from('2015-01-03'),
];

// Sort descending
dates.sort((a, b) => PlainDate.compare(b, a));
// only return the first item
console.log(dates.map(d => d.toString())[0]);