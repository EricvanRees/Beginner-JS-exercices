/* 
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/

function sortNums(num1, num2, num3) {
  let answer = [];
  answer.push(num1, num2, num3);
  return answer.sort().reverse();
}

console.log(sortNums(1,2,3)); // [3, 2, 1]
console.log(sortNums(4,5,6)); // [6, 5, 4]
console.log(sortNums(7,8,9)); // [9, 8, 7]
console.log(sortNums(8, 4, 2)); //  [8, 4, 2]