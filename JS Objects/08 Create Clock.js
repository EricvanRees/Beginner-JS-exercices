/* 8. Create Clock

Write a JavaScript program to create a clock.
Note: The output will come every second. */

setInterval(showTime, 1000);

function showTime() {
  const d = new Date();
  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}


