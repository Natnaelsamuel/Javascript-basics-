// OPERATORES IN JAVASCRIPT
// arithmetic, assignment, comparison, conditional, logical and bitwise 
// arithmetic for maths 

let z=1, y=3;
console.log(z+y);
console.log(z**y); // z the power of y

// include 
// addition, subtraction, multiplication, division, reminder of(%), power and increment and decrement 
// assignment means using =

let x=10;
x=x+5;
x+=5;

// comparison include 
// < > <= >= (relational operators)
// === !== (equality operators)

console.log(1 === 1); // strict equality (ensures both have the same type and value)
console.log('1' === 1); // false 
console.log(1 == 1); // lose equality (only value)
console.log('1' == 1); // true 
console.log(true == 1); // true 

// the lose equality operator converts the second operand to the type that muchs the first one 

// TERNARY OR CONDITIONAL OPERATORS 

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// LOGICAL OPERATORS 
// includes AND(&&), OR(||), NOT(!)

let highIncome = true;
let goodCreditscore = true;
let eligibleForLoan = highIncome && goodCreditscore;
console.log(eligibleForLoan); 

// LOGICAL OPERATORS WITH NON BOOLEAN VALUES 
// falsy (undefined, null, 0, false, '', NaN(not a number))
// anything that is not falsy -> truthy (return the value itself)
// short-circuiting

console.log(false || 1 || 2); // returns 1

let userColor ='red';
let defaultCOlor ='blue';
let currentColor = userColor || defaultCOlor; // if we have a user prefered color we use that if not we use the default color
console.log(currentColor);

// OPERATOR PRECEDENCE 
// bracket 
// unary operators 
// division and multipliaction have the same precedence 
// addition and subtraction have the same precedence 