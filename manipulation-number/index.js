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
