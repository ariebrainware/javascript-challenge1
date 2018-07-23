/**
 * Manipulation: String
 * Level 4
 */

const firstname = "Paul ";
const lastname = "Jenkin";

console.log(firstname);
console.log(lastname);
whitespace();

// Level 5

const fullname = `${firstname} ${lastname}`;
console.log(fullname);
whitespace();

// Level 6

let speak1 = "HELL OF WORLD";
let speak2 = "hell of old";
console.log(speak1.toLowerCase());
console.log(speak2.toUpperCase());
whitespace();

// Level 7

let speak3 = "first sentence must be capitalize";
function ucfirst(str) {
  var pieces = str.split(" "); // split str to array
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1); // change every first char to uppercase in every word
  }
  return pieces.join(" "); //join every words with space
}
console.log(ucfirst(speak3));
whitespace();