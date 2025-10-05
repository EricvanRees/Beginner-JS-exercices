/* 
Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

Sample numbers : 3, -7, 2

Output : The sign is -
*/

function findSign(...args) {
  const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const output = sum >= 0 ? "+" : "-";
  alert(`The sign is ${output}`);
}

console.log(findSign(5,4,6,7)); // The sign is +
console.log(findSign(-9, -7)); // The sign is -