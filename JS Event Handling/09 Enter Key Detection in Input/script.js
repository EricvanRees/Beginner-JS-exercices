
const input = document.getElementById('input');

input.addEventListener('keypress', function(e) {

  let key = e.key;
  if (key == "Enter") {
    let text = "You pressed the 'Enter' key!";
    alert(text);
  }
})



