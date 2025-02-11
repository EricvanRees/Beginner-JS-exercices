/* 95. Replace Numbers with Specified Value in Array

Write a JavaScript program to replace all numbers with a specified number in an array of integers */

function replacenums(anArr, anInt) {
  if (Array.isArray(anArr) && Number.isInteger(anInt)) {
    for (let i = 0; i <= anArr.length; i++) {
      anArr.unshift(anInt);
      anArr.pop();
    }
  }
  else {
    return false;
  }
  return anArr;
}

console.log(replacenums([1,1,1], 2));
