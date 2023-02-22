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

// const output = fizzBuzz('5');
// console.log(output);

// function fizzBuzz(input){
//     if (typeof input !== 'number') return NaN;
//     if (input % 15 === 0) return "fizzBuzz";
//     if (input % 5 === 0) return "fizz";
//     if (input % 3 === 0) return "buzz";
//     return input;
    
// }


// Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
// more then 12 points -> suspended

// console.log(checkSpeed(130));

// function checkSpeed(speed){
// const speedLimit = 70;
// const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) return 'Ok';
//     // if you have console.log return statement will go you out from function
//     // end will let you dont go to the next if position
//     if ((speed - speedLimit) / kmPerPoint >= 12) return 'licence suspended';
//         return Math.floor((speed - speedLimit) / kmPerPoint);
// }


// max of two numbers

function maxOfTwo(a, b){
   return a >= b ? a : b;
}

console.log(maxOfTwo(3, 5));

function isLandscape(width, length){
    return width > length;
}

console.log(isLandscape(4, 1));

function fizzBuzz(number){
    if(typeof(number) !== 'number') console.log(NaN);
    else if (number % 15 === 0) console.log('FizzBuzz');
    else if (number % 5 === 0) console.log('Fizz');
    else if (number % 3 === 0) console.log('Buzz');
    else console.log(number);
}

fizzBuzz(7);

function checkSpeed(speed){
    const limit = 70;
    const speedForPoint = 5;

    if(speed < limit + 5) console.log('Ok');
    else if(speed >= 75 && (speed - 70)/speedForPoint < 12) 
    console.log('Point = ' + ((speed - 70)/speedForPoint));
    else console.log('licence suspended');
}


checkSpeed(90);

function showNumber(limit){
    for(let i = 0; i <= limit; i++){
            // if(i % 2 === 0) console.log(i + ' \"EVEN\"');
            // else console.log(i + ' \"ODD\"');

            const message = (i % 2 ===0) ? "EVEN" : "ODD";
            console.log(i, message); 
    }
}

showNumber(10);


//count truthy

function countTruthy(array){
    let counter = 0;
    for(let a of array){
        if(a)
        // (a !== undefined && a !== null && a !== ''
        // && a !== false && a !== 0 && a !== NaN)
        {
            counter++;
         }
    }
    return counter;
}

const array = [0, null, '', 3, 4];
console.log(countTruthy(array));

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string') console.log(key, obj[key]);
}
}

const movie = {
    title: 'a',
    realeaseYear: 2020,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function sum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0)
            sum += i;   
}
     return sum;    
}


console.log(sum(10));



function calculate(marks){
    let sum = 0;
    let average = sum / marks.length;
    for(let mark of marks){
            sum += mark;
    }
if (average < 60) return 'F';
if (average < 70) return 'D';
if (average < 80) return 'C';
if (average < 90) return 'B';
return 'A';
}
const marks = [80, 80, 50];

console.log(calculate(marks));
   
showStars(10);
function showStars(rows){
    for(let i = 1; i <= rows; i++){
        let pettern = '';
        for(let j = 1; j <= i; j++){
            pettern += '*';
        }
        console.log(pettern);
    }
}

showPrimes(20);

function showPrimes(limit){
    if(limit < 2) return null;
    let devision = 0;
    for(let i = 2; i < limit; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0) devision++;
        }
        if(devision === 0) console.log(i);
        devision = 0;
    }
}

// showPrimes1(20);

// function showPrimes1(limit){
//     if(limit < 2) return null;
//     let isPrime = true;
//     for(let i = 2; i < limit; i++){
//         for(let j = 2; j < i; j++){
//            if(i % j === 0){
//             isPrime = false;
//            break;
//         }
//         }
//         if(isPrime) console.log(i);
//     }
// }