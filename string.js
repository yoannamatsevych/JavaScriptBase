
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

let text1 = "We are the so-called \"Vikings\" from the north.";

let x = "John";
let y = new String("John");

console.log(x==y); // Comparing two JavaScript objects always returns false.
console.log(x===y); //Comparing two JavaScript objects always returns false.

//String methods
//Slice out a portion of a string from position 7 to position 13:
let text3 = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

//If you omit the second parameter, 
//the method will slice out the rest of the string:
let text4 = "Apple, Banana, Kiwi";
let part4 = text.slice(7);


//If a parameter is negative, 
//the position is counted from the end of the string:
let text5 = "Apple, Banana, Kiwi";
let part5 = text.slice(-12);

//This example slices out a portion of 
//a string from position -12 to position -6:
let text6 = "Apple, Banana, Kiwi";
let part6 = text.slice(-12, -6);


//substring() is similar to slice().

//The difference is that start and end values less than
// 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part7 = str.substring(7, 13);


//The difference is that the second 
//parameter specifies the length of the extracted part.
let str8 = "Apple, Banana, Kiwi";
let part8 = str.substr(7, 6);

//The replace() method replaces a 
//specified value with another value in a string:
let text9 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//the replace() method replaces only the first match:
//the replace() method is case sensitive.


//To replace case insensitive, 
//use a regular expression with an /i flag (insensitive):
let text10 = "Please visit Microsoft!";
let newText1 = text.replace(/MICROSOFT/i, "W3Schools");

//To replace all matches,
// use a regular expression with a /g flag (global match):
let text11 = "Please visit Microsoft and Microsoft!";
let newText2 = text.replace(/Microsoft/g, "W3Schools");

//A string is converted to upper case with toUpperCase():

//A string is converted to lower case with toLowerCase():

let text12 = "Hello";
let text22 = "World";
let text32 = text1.concat(" ", text2);

let text13 = "      Hello World!      ";
let text23= text1.trim();

//The padStart() method pads a string with another string:

let text14 = "5";
let padded = text.padStart(4,"x");

//The padEnd() method pads a string with another string:

let text15 = "5";
let padded1 = text.padEnd(4,"x");

let text16 = "HELLO WORLD";
let char = text.charAt(0);


//A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe