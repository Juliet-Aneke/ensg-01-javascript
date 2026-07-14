sayHello();

// Defining a function
function sayHello() {
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
}

// sayHello();
// sayHello();
// sayHello();


/* 
- Function declarations
- Anonymous 
- Arrow functions
*/

/* 
========== Class Activity =================

Write a function called getEvenNumbers that prints even numbers between 1 to 20.

*/

// Functions with return keywords
// 1
function returnString() {
    return "My string";
}
const fnResult = returnString();
// const fnResult = "my string";
console.log(fnResult);

// 2
function addTwoNumbers() {
    const num1 = 10;
    const num2 = 15;
    return num1 + num2;
}

function displayResult() {
    const result = addTwoNumbers();
    console.log(result);
}

displayResult();

// 3
function doExponent() {
    const base = 9;
    const power = 2;
    return Math.pow(base, power);
}

const displayExponentResult = `The result of the exponent is ${doExponent()}`;
console.log(displayExponentResult);


function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumTwoNumbers(2, 3));
console.log(sumTwoNumbers(99, 11));
console.log(sumTwoNumbers(50, 28));

function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
}
const areaOfRectangle = calculateAreaOfRectangle(20);
console.log(areaOfRectangle);

/* 
=========== Class Activity ==============

Create a function called calculateTotal that accepts three numbers as parameters representing the prices of three items.

The function should:

- Calculate the total price.
- Display the total.
- Use a ternary operator to display:
	- "Eligible for Free Delivery" if the total is ₦10,000 or more.
	- "Delivery Fee Applies" otherwise.
*/