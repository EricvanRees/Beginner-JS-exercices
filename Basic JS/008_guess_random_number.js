/* 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". */  

function guessRandomNumber() {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
  let userInput = Number(prompt("Enter a number between 1 and 10: "));
  
  if (userInput == randomNum) {
    alert("Good Work");
   } else {
     alert("Not matched.");
  }
}

guessRandomNumber();
