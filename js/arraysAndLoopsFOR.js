// Arrays and loops
//One of the most common uses of a loop is to iterate over an array. This means going through the array and being able to do something with each element of the array.

//Let’s look at two ways to print out each element in an array. With both, for and while loops, you will leverage the array’s index to select specific elements.

// "for" loop

const animalArray = ["dog", "cat", "fish"];

for (let i = 0; i < animalArray.length; i++){
  console.log(`Index: ${i} - element: ${animalArray[i]}`);
}

// output:
// Index: 0 - element: dog
// Index: 1 - element: cat
// Index: 2 - element: fish

// "forEach" loop

// We will cover one of the most used ways to iterate over arrays, and that is the forEach loop. It is preferable to the others due // to readability.

// The .forEach() is an array method that iterates through the array and has access to each element of the array, but in a bit  cleaner and more readable way than the other two approaches.

const animalArray = ["dog", "cat", "fish"];

// option 1 - ES5 (still in use so good to know):
// animal is just a placeholder, can be any word
animalArray.forEach(function(animal){
  console.log(`option 1: ${animal}`);
});

// option 2 - ES6 (new and cool way that uses arrow function ( => ) - we will talk about this in the course)
// arrayElement is just a placeholder, can be any word
animalArray.forEach(arrayElement => {
  console.log(`option 2: ${arrayElement}`);
});



