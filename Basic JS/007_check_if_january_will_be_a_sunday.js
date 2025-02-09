/* 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. */ 

function checkJan() {
    for (let i = 2014; i < 2050; i++) {
      let dt = new Date(`January 1, ${i}`);
      if (dt.toString().substring(0, 3) === "Sun") {
        console.log(`January 1st will be a Sunday in ${i}. `);
      }
    }
}

checkJan();
