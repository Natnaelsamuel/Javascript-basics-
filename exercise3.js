// QUESTION 
// Write a function that takes height and width and check if it is a landscape
// landscape means the width is greaterthan the height 

let width = 200;
let height = 300;
let check = isLandScape(width, height);

if (check === true) console.log('The picture is a landscape');
else console.log('The image is not a landscape');

function isLandScape (width, height) {
    return (width > height);
}