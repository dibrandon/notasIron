// Define function welcome() that will receive one argument, your name, and greet you with your name.

function welcome(name) {
    console.log(`Hola ${name}`)
}
welcome("Alejandro")
//------

// Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
function printToTwenty() {

    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
printToTwenty()

// Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument
function printNumbers(num) {

    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

printNumbers(20)

// Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you have just defined:

let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];

// => expected output:
// Amsterdam
// Barcelona
// Berlin
// Lisbon
// Madrid
// Mexico City
// Miami
// Paris
// Sao Paulo

function printArrElements(someArr) {
    someArr.forEach(element => {
        console.log(element)
    });
}
printArrElements(ironCities)

let myCities = ['Buenos Aires', 'Montevideo', 'Santiago', 'Barcelona', 'Sitges']

printArrElements(myCities)

let food = ['pasta', 'lemon pie', 'guiso', 'panqueques', 'asado', 'empanadas']

printArrElements(food)

//----------------------________--_------__-__-__---____

// Define a function that will receive an array as an argument and calculate a sum of all its elements. For example, if we pass the following array to that function: const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. How would you concatenate $ sign in front of the sum?


const prices = [5, 7.99, 9.99, 0.99, 21];
function sumarDatos(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum = Math.round(sum);
    console.log(`$${sum}`);
}
sumarDatos(prices)

//----------------------________--_------__-__-__---____


// Define a function stringToLetters() that receives a string as an argument and returns an array of its letters. Example:

function stringToLetters(string) {
    let x = string.split("");
    console.log(x);
}
stringToLetters("Hello");
/*
function stringToLetters(name) {
    let name = []
    let strings = []
    for (i=0; i <= name.length; i++){
        strings.unshift()
    }
}
stringToLetters('hola')
*/


//Define a function that will: count from 1 to 100,
//on numbers divisible with 4 print “Hey”,
//on numbers divisible with 6 print “There”,
//on numbers divisible with both 4 and 6 print “Ironhack”,
//skip numbers divisible with 7,
//on the number that represents your age add ! (ex. 34!).
function count() {
    for (let i = 1; i < 100; i++) {
        if (i === 32) {
            console.log(`${i}!`);

        } else if (i % 7 === 0) {
            continue;

        } else if (i % 4 === 0 && i % 6 === 0) {
            console.log("Ironhack");

        } else if (i % 6 === 0) {
            console.log("There");

        } else if (i % 4 === 0) {
            console.log("Hey");

        } else {
            console.log(i);
        }
    }
}
count();