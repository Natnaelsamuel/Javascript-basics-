// QUESTION
// Write a function called showproperties that displays the properties of an object that are type string

const movie = {
    title: 'sth',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

function showProperties(obj) {
    for (let i in obj) {
        if (typeof obj[i] === 'string') console.log(i, obj[i]);
    }
}