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

animalArray.shift()
console.log(`extrae el primer elemento de un array y devuelve el resto en el console.log, se supone q puedo usarlo con un return y trae solo el primer elemento. test array: ${animalArray}`)

let myFirstAnimal = animalArray.shift();
console.log(myFirstAnimal)
let myLastAnimal = animalArray.pop()

console.log()



//.splice()

