
const input = document.getElementById('username');

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});

if (input.value === '') {
  alert("Enter value");
}