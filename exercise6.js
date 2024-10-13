// QUESRION
// Write a function named shownumbers that accepts a number
// then starts listing the from 0 to that number including even or odd message for the number 

showNumbers(15);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        if (i === 0) console.log(i, 'ZERO');
        else if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');
    }
}