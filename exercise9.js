// QUESTION
// Write a function that accepts a number limit 
// and sum all the multiples of 3 and 5 between 0 and that limit 

console.log(sum(10));

function sum(limit) {
    let summ = 0;

    for (let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0) summ += i;
    }
    
    return summ;
}