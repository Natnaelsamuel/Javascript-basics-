// QUESTION 
// Write a function called countTruthy that counts truthy values in an array 

const array = [0, 1, 2, false];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;

    for (let i of array) {
        if (i !== 'Falsy' &&
            i !== undefined &&
            i !== null &&
            i !== '' &&
            i !== false &&
            i !== 0 &&
            i !== NaN) count++;
    }
    return count;
} 

// More efficient way

function countTruthy2(array) {
    let count = 0;
    for (let i of array) {
        if (i) count++;
    }
    return count;
}