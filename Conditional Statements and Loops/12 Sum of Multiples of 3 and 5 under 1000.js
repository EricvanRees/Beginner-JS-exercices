/* 
Write a JavaScript program to sum 3 and 5 multiples under 1000.
*/

let multiplesOf3 = [];
let multiplesOf5 = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0) {
    multiplesOf3.push(i);
  } else if (i % 5 == 0) {
    multiplesOf5.push(i)
  }
}

console.log(`Multiples of 3: ${multiplesOf3}\n Multiples of 5: ${multiplesOf5}`);