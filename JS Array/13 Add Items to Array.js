/* 
Write a JavaScript program to add items to a blank array and display them.
*/

const myArray = [];
let bool = true;

do {
  const myInput = prompt("Enter a value: ");
  myArray.push(myInput);
  prompt(` My array: ${myArray}`);
  bool = Boolean(Number(prompt("Continue? Enter 1 to continue or 0 to stop adding numbers: ")));
  bool? prompt("You chose to continue adding numbers") : prompt("You chose to stop adding.")  
}
while (bool);