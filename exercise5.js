// QUESTIONS
// Speed limit = 70
// if speed is greaterthan by 5 -> 1 point an so on
// more that 12 points -> suspended
// use the Math.floor() function

checkSpeed(100);

function checkSpeed (speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }
        
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License suspended');
    else console.log('points: ', points);
}