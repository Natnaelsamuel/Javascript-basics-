let name="Natnael"; // string literal
console.log(name);

// RULES OF VARIABLES 
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number 
// they cant contain space or - (use camel notation)
// are case-sensitive 

let interestRate=0.3; // number literal
interestRate=1;
console.log(interestRate);  

// to declare a constant use the keyword const instead of let 
// we cannot reassigne a constant 

const interestRate2=0.3;
console.log(interestRate2);
let isApproved=true; //boolean literal 

// PRIMITIVE / VALUE TYPES INCLUDE 
// string, number, boolean, undefined(default), null(explicitly)
// but undefined can be declared explicitly 

console.log(typeof name); // keyword to display the type of variable

// javascript is a dynamic language (dynamically-typed)
// meaning - the type of a variable can be changed 
// there is only one type of number in javascript 
// in other programming languages there is two (integer & float)

let person={
    Name: 'Nati', 
    age: 30
}; // object literal
console.log(person);
person.Name='jhon'; // dot notation (commonly used)
person['Name']='mary'; // bracket notation

// REFERENCE TYPES INCLUDE 
// objects, arrays, functions

let selectedColors = []; // empty array literal
let selectedColors2 =['red', 'blue'];
console.log(selectedColors2);
console.log(selectedColors2.length); // to show how many elements the array contains 

// an array is an object in javascript 
// arrays are dynamic in javascript (both in size and length)
// meaning - they can contain different types 

function greet(n,l){ // function declaration with parameter
    console.log('HI ' + n + ' '+ l);
}
greet('John', 'smith'); // function calling with argument 

// a function is set of statements that perform a specific task
// a function doesn't require a semicolon 
// we use parameter at the time of declaration 
// and argument is the acctual value for that parameter 
// a function doesn't require return and parameter type 

function square(num){
    return num * num;
}
let num2 = square(2);
console.log(num2);

// console.log() is also a function call