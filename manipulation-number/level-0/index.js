var num1 = 10;
let num2 = 099;
const num3 = 0.02;

function whitespace() {
  console.log(`=================
`);
}

/**
 * Manipulation: Number
 * Level 0-1
 */

console.log("var num1: " + num1);
console.log("var num2: " + num2);
console.log("var num3: " + num3);
whitespace();

console.log("Addition");
console.log(num1 + num2 + num3);
whitespace();

console.log("Substraction");
console.log(num1 - num2 - num3);
whitespace();

console.log("Multiplication");
console.log(num1 * num2 * num3);
whitespace();

console.log("Division");
console.log(num1 / num2 / num3);
whitespace();

// Level 2

console.log(num1 + " Hell of world " + num2 + num3);
console.log(num1 + num2 + num3 + -100 * 99);
whitespace();

// Level 3

let arr = [num1, num2, num3, " Hell of world "];
const truth = true;
arr.unshift(truth);
console.log(arr);
whitespace();

arr.pop();
console.log(arr);

arr.push(" Push method ");
console.log(arr);
whitespace();

console.log("Display array value using for loop:");
for (x = 0; x <= 3; x++) {
  console.log(arr[x]);
}
whitespace();

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

console.log(firstname + " " + lastname);
const fullname = `${firstname} ${lastname}`;
console.log(fullname);
whitespace();

// Level 6

let speak1 = "HELL OF WORLD";
let speak2 = "hell of old";
let speak3 = "first sentence must be capitalize";
console.log(speak1.toLowerCase());
console.log(speak2.toUpperCase());
whitespace();

// Level 7

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

// let A = prompt("Input first number: ", "0");
// let B = prompt("Input second number: ", "0");
// const numA = parseInt(A);
// const numB = parseInt(B);

// if (numA >= numB) {
//   console.log("phi greater than r");

//   alert("phi greater than r");
// } else if (numA <= numB) {
//   console.log("r greater than phi");
//   alert("r greater than phi");
// } else {
//   console.error("[ERROR]Invalid input!!");
//   alert("[ERROR]Invalid input!!");
// }
// whitespace()

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

/**
 * Calculator Math
 * Level 14-15
 */

function calc(x, y, operator) {
  this.add = function() {
    return x + y;
  };
  this.substract = function() {
    return x - y;
  };

  if (operator == "add") {
    this.add();
  } else {
    this.substract();
  }
}

console.log(calc(6, 4, "add"));
