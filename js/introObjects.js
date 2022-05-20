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


  