console.log('Hello world');
let name = 'Yoanna';
console.log(name);
const rate = 0.3;
//rate = 1;
console.log(rate);
let name1 = 'Yoanna'; // String literal
let age = 30; // number literal
let isApprove = true; // boolean literal
let firstName; //undefiend
let color = 'red';

let person ={
name2: 'John',
age2: 30
};
//dot Notations
person.name2 = 'Jane';

//bracket notations
person['name2'] = 'Mary';

console.log(person.name2);

let selectedColors = ['red', 'green'];
selectedColors[2] = 'blue';
console.log(selectedColors.length);


//Performing a task
function greet(name, lastName){
console.log ('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary', 'Smith');

//Calculate a value
function squere (number){
    return number * number;
}

let number = squere(2);
console.log(number);

console.log(squere(3))