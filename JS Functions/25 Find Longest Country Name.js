/* 
Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])

Expected output : "United States of America"
*/

function Longest_Country_Name(anArr) {
  return anArr.reduce((a, x) => x.length > a.length? x : a);
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));