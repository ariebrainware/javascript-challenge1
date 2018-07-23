/**
 * Comparison: Number
 * Level 8
 */

const phi = 3.14;
const r = 14;

console.log(phi);
console.log(r);

if (phi >= r) {
  console.log("phi greater than r");
} else {
  console.log("r greater than phi");
}
whitespace();

// Level 9 

let A = prompt("Input first number: ", "0");
let B = prompt("Input second number: ", "0");
const numA = parseInt(A);
const numB = parseInt(B);

if (numA > numB) {
  console.log("First number greater than second number");
  alert("First number greater than second number");
} else if (numA < numB) {
  console.log("First number less than second number");
  alert("First number less than second number");
} else if (numA == numB) {
  console.log("First number equal to second number");
  alert("First number equal to second number");
}else if(numA == null || numB == null){
  console.log("Cannot compare to null value");
  alert("Cannot compare to null value");
}else{
  console.log("Invalid value!");
  alert("Invalid value!");
}
whitespace()

// Level 10

let intA = 8;
let intB = 10;

intA >= intB
  ? console.log("A greater than B")
  : console.log("B Greater than A");
whitespace();

// Level 11

let intC = 12;
console.log(4 >= intA >= 10);
console.log(intB && intC); // will output the biggest the number
whitespace();

// Level 12

function mathRect(x, y) {
  return x * y;
}
console.log(mathRect(3, 4));

// Level 13

let rand = Math.random();
console.log("Random number: ", rand);
whitespace();
