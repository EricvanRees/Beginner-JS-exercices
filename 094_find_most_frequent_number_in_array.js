/* 94. Find Most Frequent Number in Array

Write a JavaScript program to find the number appearing most frequently in a given array of integers. */

// helper function to find object's key with a value only
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function findMostFreqNum(anArr) {
  if (Array.isArray(anArr)) {
    // define empty array to store individual counts of each array element:
    const counts = {};
    // populate count object with array elements and counts
    for (const num of myArr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    // create array of individual values 
    let arr = Object.values(counts);
    
    // find the value appearing most times:    
    let max = Math.max(...arr);

    let keyByVal = getKeyByValue(counts, max);
    
    return  `Number appearing most frequently in given array is ${keyByVal}. It appears ${max} times.` ;
    }
    else {
      return false;
    }
}

let myArr = [1, 1, 2, 2, 3, 3, 3, 3, 4];
console.log(findMostFreqNum(myArr));
