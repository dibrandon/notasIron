let language = 'JavaScript';
console.log(`I am learning ${language}!`);
// output: "I am learning JavaScript!"

//concatenar 
let emptyContainer = "";
emptyContainer += "Hello there, student!";
// += is equivalent to saying:
// emptyContainer = emptyContainer + "Hello there, student!";
console.log(emptyContainer); 

// ERROR CASE
// At this moment the value of the emptyContainer is "Hello there, student!"
emptyContainer + " How are you?"; //incorrecto
// We would expect the value to be "Hello there, student! How are you?" 
// However, the value is still "Hello there, student!", because we didn't reassign the variable value with `+=`
console.log(emptyContainer);

// If we want it to console "Hello there, student! How are you?",
// we need to have the following: emptyContainer += " How are you?";

console.log(emptyContainer += " How are you?"); //correcto

const price = 12.99;
const statement = `The price of this amazing product is ${price}.`;

console.log(`The example of interpolation: ${statement}`);

const campuses = `
- Madrid
- Barcelona
- Miami
- Mexico City
- Paris
- Berlin
- Sao Paulo
- Lisbon`;

console.log(`Multiline string and interpolation 😉: ${campuses}`);

const country = "USA";
console.log("The country:", country);

const otherCountry = 'Spain';
console.log("The otherCountry:", otherCountry);

let name = "Ironhacker";
console.log("The name:", name);

let username = 'ironhack123';
console.log("The username:", username);

let superSecretPassword = "pa$$w0rd_";
console.log("Shhhh:", superSecretPassword);