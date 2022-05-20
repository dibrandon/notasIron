// intro objetos

// Objects are collections of properties and each property is represented with key-value pair. The representation of an object in JavaScript is curly braces {}

//the values can be of any type: strings, numbers, arrays, booleans, functions, or even other objects.

//estructura basica:
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
  };
  

let student = {
    firstName: 'Bob',
    lastName: 'Hill',
    course: 'Web Dev',
    city: 'Miami',
    age: 29,
    hasPriorExp: false,
    goals: ['career change', 'new skills'],
    step: {
      application: 'approved',
      techTest: 'passed',
      prework: 'submitted',
      course: 'ongoing',
      foundJob: '',
      activeAlumnus: ''
    }
  };
//---------------------------------------------------------
//objetos primeros pasos
  let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powell'
  };

  console.log(olympicRecords);
// console output:
// { athletics100Men: "Justin Gatlin", athleticsLongJumpMen: "Mike Powell" }

// acces to the values:

//We have two different ways to access object properties and their values:

// dot notation and
// bracket notation

olympicRecords.athletics100Men; // => "Justin Gatlin"
// The pattern to follow: objectName.key will give you the value you are looking for

olympicRecords['athletics100Men']; // => "Justin Gatlin"
// There is some slight difference between these two ways that we will see a little bit later but using dot notation is still much more common, plus it is shorter and cleaner

// agregar propiedades al objetos
// To add a new property to an object that has already been declared you simply reference the new key you want to add either with dot notation or bracket notation and assign the new value, like shown below:
  
  // objectName.key = value
  olympicRecords.swimming200Men = 'Michael Phelps';
  
  // Updating values with dot notation

// The process couldn’t be more straightforward than this:

olympicRecords.athletics100Men = 'Usain Bolt';

// -------------------------
olympicRecords.doubleOllie = 'Chris Chann';

  //------------------------------

  // Removing Properties
// Sometimes the structure that is described in objects changes and we have to remove some properties. Let’s suppose we have made a mistake and added a new key, the Double Ollie world record:

// How should we remove this key?

// Well, we can use the delete operator to remove keys from an object. It is as simple as specifying which key you want to remove:

delete olympicRecords.doubleOllie;

console.log(olympicRecords);

// console output:
// {
//   athletics100Men: "Usain Bolt",
//   athleticsLongJumpMen: "Mike Powell",
//   swimming200Men: "Michael Phelps",
// }
//--------------------------------------------------

// List Properties

// Next up, we will show you an object method that will help you list all the properties of the object.
// 
/* This is extremely useful when you work with a huge object and you are not sure what properties it has. */ Object.keys() //receives an object as an argument. In our case it would be:

let allKeys = Object.keys(olympicRecords); //objetct primera letra MAYUSCULA

console.log(allKeys);

// console output:
// [ "athletics100Men",
//   "athleticsLongJumpMen",
//   "swimming200Men" ]

// Hay un LOOp FOR (IN) especificio para iterar sobre objetos

//     Loops in objects
//Although you can use Object.keys()and for or while loops, In JavaScript, there is a loop designed explicitly for iterating over objects. This loop is called for..in.

//To see which are the properties, the syntax is as follows:

//    placeholder - can be any word (key, record, blah, pizza but     pick meaningful names) (key=placeholder, so it can be anything)
//        |
for (let key in olympicRecords) {
    console.log(key);
  }
  
  // console:
  // athletics100Men
  // athleticsLongJumpMen
  // swimming200Men

  // The loop will always iterate as many times as the properties in the object. And in every iteration, the variable key (or whatever name you decide to give it) will be the current key.

  // ahora que ya sabemos obtener los keys de un object, veamos como
  // matchear con los valores contenidos en esas keys/propiedades

  for (let key in olympicRecords) { // key es como i en un bucle for
    console.log(olympicRecords[key]); // <== objectName[key]
  }
  
  // Usain Bolt
  // Mike Powell
  // Michael Phelps
  
// el operador IN

// The in operator is used to verify if a certain property exists in an object. It returns a boolean

let user = {
    name: 'Ana',
    age: 27
  };
  
  console.log('name' in user); // => true
  console.log('age' in user); // => true
  console.log('course' in user); // => false
  
  