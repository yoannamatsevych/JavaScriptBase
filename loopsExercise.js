// write function of getting max of two numbers


// function maxOfTwo(a, b){
//    return (a >= b) ?  a : b;
    
// }

// let number = maxOfTwo(5, 4);
// console.log(number);

// function isLandscape(width, height){
//     return width > height;
// }


// console.log(isLandscape(4, 1));

//FizzBuzz

const output = fizzBuzz('5');
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') return NaN;
    if (input % 15 === 0) return "fizzBuzz";
    if (input % 5 === 0) return "fizz";
    if (input % 3 === 0) return "buzz";
    return input;
    
}


// Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
// more then 12 points -> suspended

console.log(checkSpeed(130));

function checkSpeed(speed){
const speedLimit = 70;
const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) return 'Ok';
    // if you have console.log return statement will go you out from function
    // end will let you dont go to the next if position
    if ((speed - speedLimit) / kmPerPoint >= 12) return 'licence suspended';
        return Math.floor((speed - speedLimit) / kmPerPoint);
}
