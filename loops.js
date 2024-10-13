// LOOPS INCLUDE
// for, while, do...while, for...in, for...of

// FOR LOOPS
for ( let i = 0; i < 5; i++){
    console.log('Hello world');
}

// WHILE LOOPS 
let j = 0;
while ( j <=5 ){
    if (j % 2 !== 0) console.log(j);
    j++;
}

// DO...WHILE LOOPS
let k = 9;
do {
    if (k % 2 !== 0) console.log(k);
    k++; 
} while ( k <= 5 );

// FOR...IN LOOPS (used to iterate over properties of an object including an array)
const person = {
    name: 'Nati',
    age: 20
};
for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);

// FOR...OF LOOPS (used to iterate over the elements or values of an object or an array)
for (let color of colors)
    console.log(color);

// BREAK AND CONTINUE
let i = 0;
while (i <= 10) {
    if (i === 5) break;

    if (i % 2 === 0){
        i++;
        continue;
    }

    console.log(i);
    i++;
}