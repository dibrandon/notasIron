// An array in JavaScript represents a data structure that allows us to store multiple variables/values in it. Other data structures allow the same, such as objects (next to be covered), but arrays represent an ordered collection of elements.

const animalArray = ["dog", "cat", "fish"];

const myDog = animalArray[0];
console.log(myDog);

const myFish = animalArray[2];
console.log(myFish);

// returns undefined when there's no element with the that index
const myUndefinedElement = animalArray[3]
console.log(myUndefinedElement);

// Things to keep in mind:

// whatever is in the array, we will refer to it as the element of that array.
// elements in the array are separated with commas.
// elements are numbered, starting with zero.
// we can access each element using the particular position of that element. Like strings, the index starts at 0.

console.log(`The lenght of the animal arrays is: ${animalArray.length}.`)

// acceso al ultimo elemento de un array
// The length of the array is 3 but the last element is on 
// the position 2 since we start counting from zero
// this tells us that the position of the last element will always be:
// the length of the array - 1 (3-1=2)

const lastIndex = animalArray.length - 1;
const lastElement = animalArray[lastIndex]

console.log(lastElement)

// Adding and Removing Elements

.push() // The .push() method adds a new element to the end of your array.

animalArray.push("lizard");
console.log(`Agrega al final: ${animalArray}`); // => After: dog,cat,fish,lizard

// .unshift() // If you want to add an element at the beginning of the array, what you are looking for is the .unshift() method.

animalArray.unshift("whale")
console.log(`unshift agrega al principio ${animalArray}`);

// .pop() // If you want to extract the last element of the array, then you should use the .pop() method.

animalArray.pop("")
console.log(`pop quita el ultimo elemento de un array ${animalArray}`);


//.shift() // In case you need to remove the first element of the array, you should use the .shift() method, since it extracts and returns the first element.

// While using .pop() and .shift() to remove an element from an array you might be wondering, what if I want to use the removed element later? Luckily, these methods return the removed element, allowing you to store it inside a variable, like this:

const animalArray = ['dog', 'cat', 'fish'];

// removes the first element and stores it inside a variable
let myFirstAnimal = animalArray.shift();
// removes the last element and stores it inside a variable
let myLastAnimal = animalArray.pop();

console.log(animalArray); // => ["cat"]
console.log(myFirstAnimal); // => "dog"
console.log(myLastAnimal); // => "fish"


animalArray.shift()
console.log(`extrae el primer elemento de un array y devuelve el resto en el console.log, se supone q puedo usarlo con un return y trae solo el primer elemento. test array: ${animalArray}`)

let myFirstAnimal = animalArray.shift();
console.log(myFirstAnimal)
let myLastAnimal = animalArray.pop()

console.log()

// --------------------------------------------------------------
// Removing and/or adding Items in any position: .splice()
// Sometimes, we may want to add/remove elements in any location besides the start or end of the array. To do this, we use a // slightly more complex method called .splice(). This method can receive either two or more arguments:
// 
// the first defines the index position from which you want to start deleting or adding elements,
// the second defines how many items will be deleted. If this argument is 0, it will simply not remove anything,
// the third (OPTIONAL) defines an item that will be added to that position. If the argument is not passed, it will simply add // nothing to the array.


//.splice()


const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); // => Original: dog,cat,fish,lizard,whale,cheetah
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(`From the first element, remove one going forward: ${animalArray}`);
// => From the first element, remove one going forward: cat,fish,lizard,whale,cheetah

//  "From the second element, remove two going forward"
animalArray.splice(2, 2);
console.log(`From the second element, remove two going forward: ${animalArray}`);
// => From the second element, remove two going forward: cat,fish,cheetah

// If we pass a third argument
// It is inserted as the replacement
animalArray.splice(0, 1, "Something else");
console.log(`If we pass a third argument: ${animalArray}`); // => If we pass a third argument: Something else,fish,cheetah

// -----------------------------------------------------
