/* 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). */  

function multiply() {
  let first = document.getElementById('first').value;
  let second = document.getElementById('second').value;
  let resultAsText = document.querySelector('#result');

  let result = first * second;
  resultAsText.append(result);
}

function divide() {
  let first = document.getElementById('first').value;
  let second = document.getElementById('second').value;
  let resultAsText = document.querySelector('#result');

  let result = first / second;
  resultAsText.append(result);
}

