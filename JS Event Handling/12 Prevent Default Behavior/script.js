
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault()
  console.log(fname.value);
  console.log(lname.value);
})