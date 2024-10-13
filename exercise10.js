// QUESTION 
// Write a function that calculates grade of a student from an array
// first it calculates the average then if
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let avr = calculateAverage(marks);

    if (avr >= 0 && avr <= 59) return 'F';
    else if (avr >= 60 && avr <= 69) return 'D';
    else if (avr >= 70 && avr <= 79) return 'C';
    else if (avr >= 80 && avr <= 89) return 'B';
    else if (avr >= 90 && avr <= 100) return 'A';
    else return 'not a valid input';
}

function calculateAverage(array) {
    let avr = 0;
    for (let i of array) avr += i;
    return avr /= array.length;
}