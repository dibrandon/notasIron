function sayHello() {
    console.log('Hello!');
  }
  sayHello(); 

  // ------

//   function <name> ( [parameter_list] ) {
//     <instructions>
  
//     [return <expression>;]
//   }
  
// ---------

// function declaration with a parameter
function sayHello(language) {
    switch (language) {
      case 'fr':
        console.log('Bonjour!');
        break;
      case 'ger':
        console.log('Hallo!');
        break;
      case 'esp':
        console.log('Hola!');
        break;
      default:
        console.log('Hello!');
    }
  }
  
  // function invocation with or without an argument
  sayHello('ger'); // => Hallo!
  sayHello('fr'); // => Bonjour!
  sayHello('esp'); // => Hola!
  sayHello(); // => Hello!

  // 
  //

  function printInput(input, numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++) {
      console.log(`Inputted: ${input}`);
    }
  }

  // declare the function-define two parameters:
function printInput(theInput, numberOfTimes){
    for(let i=0; i<numberOfTimes; i++){
      console.log(`Inputted: ${theInput}`)
    }
  }
  
  
  // invoke the function - pass two arguments:
  printInput(2, 3); 
  printInput("Ironhack is the best!", 2);
  
  