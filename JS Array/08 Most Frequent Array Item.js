/* 8. Most Frequent Array Item

Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const counts = {};

function findMostFreq(anArr) {
  let sortable = [];
  for (const num of anArr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  for (let num in counts) {
      sortable.push([num, counts[num]]);
  }
  return sortable.sort(([, a], [, b]) => b - a)[0];
}

console.log(findMostFreq(arr1));
