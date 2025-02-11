/* 38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.

If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.

If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.  */

function studentEval(total, finalex = false) {
  let aPlus = false;
  if (total >= 89 && total <= 100) {
    aPlus = true;
  } else if (finalex == true) {
    if (total >= 90) {
      aPlus = true;
    } 
  }
  return aPlus;
}

console.log(studentEval(89)); // true
console.log(studentEval(90, true)) // true
console.log(studentEval(88)); // false
console.log(studentEval(77, true)); //false
