/* Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
 */

let link = document.getElementById('w3r');

let href = link.href;
let hreflang = link.hreflang;
let rel = link.rel;
let target = link.target;
let type = link.type;


function getAttributes() {
  console.log(`href value: ${href}, link value: ${hreflang}, rel value: ${hreflang}, rel value: ${rel}, target value: ${target}, type value: ${type}`);
}