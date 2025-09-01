/* 
Write a JavaScript program to count the number of arrays inside a given array.

Test Data :

([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

Expected Output:

Number of arrays inside the said array: 2
Number of arrays inside the said array: 3
*/

const anArr = ([2,8,[6],3,3,5,3,4,[5,4]]);

/* function checkArr(any) {
  let total = 0
  for (let i = 0; i <= anArr.length; i++) {
    if (Array.isArray(anArr[i])) {
      total++;
    }
  }
  return total;
} */

// using filter()
const arrs = anArr.filter((item) => Array.isArray(item))
console.log(arrs.length);

// console.log(checkArr(anArr));