// QUESTION
// Write a function that returns 
// Fizz if a number is divisible by 3
// Buzz if a number is divisible by 5
// Fizzuzz if a number is divisible by 3 and 5
// Not divisible by 3 or 5 return the input 
// if the input is not a number display : not a number 

const output = isFizzBuzz(15);
console.log(output);

function isFizzBuzz (input) {
    if (typeof input === 'number'){
        if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
        else if (input % 3 === 0) return 'Fizz';
        else if (input % 5 === 0) return 'Buzz';
        else return input;
    }
    else return NaN; // not a number 
}
