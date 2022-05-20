// falle, debia de usar el metodo .unshit al agregar el elemento quitado previamente
const myArray = [3,6,2,1,9]

let lastElement = myArray.pop()

let firstElement =myArray.shift()

myArray.unshift(lastElement)
myArray.push(firstElement)
console.log(myArray)

// ejerciocio arrays sumas
// Given an array of numbers, calculate the sum:

// const prices = [10.99, 44.56, 112.79, 3, 5];
// let sum = 0; // start value for the sum

// solucion

// Initial code
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum
 
// loop that goes from 0 to the length of the prices array
for (let i = 0; i < prices.length; i++) {
  // in every iteration, the value of the current array element will be added to sum
  sum += prices[i];
}
 
// Math.round() is a Number method used to round numbers to it's closest integer value
sum = Math.round(sum);
 
console.log(sum);

// ejercicio 2

let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

seriesPending.push("Simuladores") // agrega un elemento al final del array

for (let i = 0; i < seriesPending.length; i++) {
    if (seriesPending[i] === "Boolean 99") {
        console.log(`Serie num ${i}: ${seriesPending[i]} Found it!`);
    } else {
        console.log(`Serie num ${i}: ${seriesPending[i]}`);

    }
    
}

let seriesWatching = [];


let removedSeries = seriesPending.shift();
seriesWatching.push(removedSeries);
 
// another solution in a single line
// will use the removed value with .shift() to add it with .push()
// seriesWatching.push(seriesPending.shift())
 
console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

for (let i = 0; i < 4; i++) {
  seriesWatching.push(seriesPending.shift());
}
 
console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

seriesWatching.splice(0, seriesWatching.length);



console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);






// let firstSerie = seriesPending.shift[0]
// seriesWatching.push(firstSerie)

// otra solucion

// seriesWatching.push(seriesPending.shift())

//console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

// seriesPending.forEach(element => {
//     seriesWatching.push(firstSerie);
//     console.log(`Series Pending: ${seriesPending.length} Series Watching: ${seriesWatching.length}`)
// });






 for (let i = 0; i < 4; i ++){
     seriesWatching.push(seriesPending.shift())
     console.log(`series pending: ${seriesPending.length} series watching: ${seriesWatching.length}`)

}
