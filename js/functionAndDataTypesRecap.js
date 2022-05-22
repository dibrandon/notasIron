/*
Introduction
We are almost at the end of the JavaScript portion of module 0. Before we move forward into this exercise that gathers the two most significant areas we covered so far, let’s first recap basic data types and their possible combinations (nested data types).

Recap
Variables and their declaration
In JS, we can think of any variable as an empty box in which we can save some value. This said variables can also be left empty, meaning without values. This is their initial state, and the process of just creating a variable without assigning it a value is called variable initialization.

To declare a variable, we have to use one of the predefined keywords: let, const, or var. The newer, ES6 syntax uses the first two, but var is still very often seen. Whenever you would use var, you could also use let and vice versa. Later in the course, we will dig much deeper into this topic and learn more about Scope (in case you are curious, take a look here).

However, it is super important to remember this: you can’t create an empty variable when using const. When using const, a value must be assigned to the variable at the moment of its initialization.
*/
let name;
const year; // <== wrong

/*
In the above example, the variable name is initialized, but no value is assigned to it. As this is a let variable, it is allowed to initialize the variable empty without providing a value.

On the other hand, variable year is created as a const variable. Initializing a const variable without the initial value is not allowed in JavaScript, and therefore an error will be thrown. You can try it on your own by running the above code. Fixing this is fairly simple. Always remember that const variables must be given an initial value when created. Therefore, the right way to create the above const variable year would be:
*/
const year = 2021;
/*
Next, let’s do a recap of JavaScript data types.
*/
let = "mike" // variable value en este caso string
let = 'web dev' // comillas simples 
let = `full-time` // o backticks

const year = 2020;
const price = 30.99;

// numeros como tipo de dato datatype
const year = 2020;
const price = 30.99;


//booleans as datatype
const isStudent = true;
const hasDegree = false;

//Objects as data types

/*
Objects are are containers for named values called properties and methods. Objects can be used to store mixed data types and can even contain other objects or arrays nested within:
*/

const phone = {
    brand: 'Apple',
    type: 'iPhone',
    model: 'X',
    specs: {
      capacity: '256 GB',
      size: {
        height: '5.65 inches',
        width: '2.79 inches'
      }
    },
    chip: ['bionic', 'neural engine', 'embedded motion processor']
  };

  
  // Let’s create a simple function to list the phone’s properties:

  function getPhoneDetails(thePhone) {
    const phoneDetails = `${thePhone.type} ${thePhone.model} by ${thePhone.brand}
  Characteristics: 
  1 - capacity: ${thePhone.specs.capacity},
  2 - dimensions: ${thePhone.specs.size.height} x ${thePhone.specs.size.width}`;
  
    console.log(phoneDetails);
    console.log('Chip specs:');
  
    for (let i = 0; i < thePhone.chip.length; i++) {
      console.log(`${i + 1} - ${thePhone.chip[i]}`);
    }
  }
  
  getPhoneDetails(phone);

  // output
  // iPhone X by Apple
// Characteristics:
// 1 - capacity: 256 GB,
// 2 - dimensions: 5.65 inches x 2.79 inches
// Chip specs:
// 1 - bionic
// 2 - neural engine
// 3 - embedded motion processor


// Arrays as data types

// Elements of the array can have any type of value. This being said, other arrays, as well as objects, can be nested in them

const someArr = ['max', 34, true, { name: 'sandra', student: true }, ['javascript', 'mongodb', 'react']];

console.log(someArr);
// [
//   'max',
//   34,
//   true,
//   { name: 'sandra', student: true },
//   [ 'javascript', 'mongodb', 'react' ]
// ]

// We learned that we could loop through arrays using for or forEach loop. Now let’s loop through this previous array and print the type of each element in the console:

someArr.forEach(elem => {
    console.log(`The element ${elem} is of type: ${typeof elem}.`);
  });
  
  // The element max is of type: string.
  // The element 34 is of type: number.
  // The element true is of type: boolean.
  // The element [object Object] is of type: object.
  // The element javascript,mongodb,react is of type: object.
  





