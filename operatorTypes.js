let x = 10;
let y = 3;


// Ariphmetical operator
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment(++)
console.log(++x);

console.log(x++);
console.log(x);

// Decrement(--);
console.log(--x);

console.log(x--);
console.log(x);

//Assignment operator

let z = 10;

z = z + 5;
z += 5;

z = z * 3;
z *= 3;

//Comparison operator

let p = 1;

console.log(p > 0);
console.log(p >= 1);
console.log(p < 1);
console.log(p <= 1);

//Strict Equality (Same type and the same value) 
console.log(1 === 1);
console.log('1' === 1);

//Lose Equality
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//Turnary operator

/*
if a customer has more then 100 points
they are a 'gold' customer
otherwise they are a 'silver' customer
*/
let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


// && Logicall operator returns true if both of value are true
let hignIncome = false;
let creditScore = false;
let eligibleForLoan = hignIncome && creditScore;

console.log(eligibleForLoan);

// || Logicall operator returns true if one of the values are true

eligibleForLoan = hignIncome || creditScore;
console.log('Eligible ' + eligibleForLoan);

//NOT(!)

let applicationRefused = !eligibleForLoan;

console.log('Application refused ' + applicationRefused);

//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN


//Anything that is not falsy is truesy

console.log(false || 'Mash');//'Mash'
console.log(false || 1); //1

//Short-circuiting

console.log(false || 1 || 2); // as soon as it finding truesy is stop looking

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor ||  defaultColor;

console.log(currentColor);

//Bitwise operator
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011 - if there is at list 1 (1) it compare to 1
// 0 = 00000000 - in the & case - if there it at list one 0 return 0

console.log(1 | 2); // Bitwise OR - compare binary code - answer = 3
console.log(1 & 2); // Bitwise AND


// user has permission
//Read -    00000100
//write -   00000010
//Execute - 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | executePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

// Exersice

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);