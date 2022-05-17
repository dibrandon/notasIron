//Accessing a single character of a string using its index
// You can access characters inside of strings with their index number. The index determines the character order in the word, from left to right, but be aware the index always starts at 0. To access a character via its index you can use [] like shown in the example below.

const greeting = "Hello";
console.log(greeting[0]); // => H
console.log(greeting[4]); // => o
console.log(greeting[9]); // => undefined
console.log(greeting[-2]); // => undefined


// .indexOf(substring)
// JavaScript has a cool indexOf() method that returns the index of a particular character/string occurrence. If the substring was not found, it returns -1. To use it you just need to put the character or characters string you want to know the index of inside the () of indexOf() as shown below.

const favoritePhrase = "Don't be evil";

console.log(favoritePhrase.indexOf("Don't")); // => 0

console.log(favoritePhrase.indexOf("e")); // => 7 because indexOf prints the FIRST occurance

console.log(favoritePhrase.indexOf("z")); // -1 since it's not found

//slice metodo
let statement = "I am the Ironhacker and I can't wait for this course to start!!!";

// it is zero indexed ==> starts with zero
let test1 = statement.slice(0, 19);
console.log(test1); // => I am the Ironhacker

// if the second parameter is not passed, it will capture 
// from the character found on the position that corelates with passed number 
// to the end of the string
let test2 = statement.slice(24);
console.log(test2); // => I can't wait for this course to start!!!

// if negative nuber is passed, the count starts from the end of the string
let test3 = statement.slice(-8);
console.log(test3); // => start!!!

