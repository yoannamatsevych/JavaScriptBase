

let hour = 13;

if (hour >= 6 && hour < 12)
console.log('Good morning!');

else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');

else console.log('Good evening');

let role = 'guest';
switch (role){
    case 'guest':
        console.log('Guest user');
        break;
    
    case 'moderator':
        console.log('Moderator user');
        break;    

    default:
        console.log('Uknown user');    
}

if (role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderator user');
else console.log('Uknown user');