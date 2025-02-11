/* 14. Insert in String

Write a JavaScript function to insert a string within a string at a particular position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises." */

function insert(aStr, insertStr = '', par = 0) {
  let newStr = '';
  if (typeof(aStr) === 'string' && typeof(insertStr) === 'string' && Number.isInteger(par)) {
    newStr = aStr.slice(0, par) + insertStr + aStr.slice(par);
  }
  else {
    return false;
  }
  return newStr;
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));