// CONDITIONAL STATEMENTS INCLUDE
// if...else and switch...case 

// if...else 
let hour = 10;

if (hour >=6 && hour < 12) {
    console.log('Good morning');
}else if (hour >= 12 && hour < 18){
    console.log('Good afternoon');
}else {
    console.log('Good evening');
}

// switch...case 
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest user');
        break;

    case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown user');
}