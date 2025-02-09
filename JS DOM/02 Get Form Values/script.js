/* 2. Write a JavaScript function to get the values of First and Last names of the following form. */

let form = document.querySelectorAll('input[type="text"]');

function getFormvalue() {
  let newArray = Array.from(form);
  newArray.forEach(el => {
    console.log(el.value);
  })
}

