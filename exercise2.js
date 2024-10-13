// QUESTION
// Write a function that takes two numbers and returns the maximum of the two

function max (number1, number2) {
    if (number1 > number2) return number1;
    else if (number2 > number1) return number2;
    else return 'The numbers are equal';
}

let num1 = 5;
let num2 = 5;

let num3 = max(num1, num2);
console.log(num3);