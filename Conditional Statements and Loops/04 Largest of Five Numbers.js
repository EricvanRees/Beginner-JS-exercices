/* 
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
*/

function findMax(num1, num2, num3, num4, num5) {
  
  let maxNum = Math.max(num1, num2, num3, num4, num5);
  alert(`Highest number is ${maxNum}`);
}

 console.log(findMax(1,2,3,4,5));
 