/* 
Write a JavaScript function to compute the factors of a positive integer.
*/

/* function compFactors(anInt) {
  const myArr = [];
  for (let i = 1; i <= anInt; i++) {
    if (anInt % i == 0) {
      myArr.push(i);
    }
  }
  return myArr;
} */

// as arrow function:
const compFactors = anInt => {
  const myArr = [];
  for (let i = 1; i <= anInt; i++) {
    if (anInt % i == 0) {
      myArr.push(i);
    }
  }
  return myArr;
}

console.log(compFactors(12));