// -Before we start writing code, we have to think of the process:

// -we will have two numbers that need to be added, subtracted, multiplied, or divided;
// -we can ask the user to pass as arguments these two numbers;
// -we will have (for now) four operations: +, -, * and /;
// -we can ask the user to pass an operator as an argument as well;
// -we need to check what does a user want to do - which operator did they pass;
// -depending on that, we will know which operation to execute.
// -Let’s see what we can do so far. We know our function will have 3 arguments: two numbers and an operator.

// function calculateSum(num1, num2) {
//     return num1 + num2;
//   }
  

  function calculator1(num1, num2, operator) {
    // code
  }
  
  // para invicar la funcion hacemos los siguiente:
  
  calculator1(6, 7, '+');

  // potencial solucion con if-else

  if (operator === '+') {
    // do the math
  } else if (operator === '-') {
    // do the math
  } else if (operator === '*') {
    // do the math
  } else {
    // do the math
  }
//------------
// algo mas mas estilisado sin tantos else if

function calculator2(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}


calculator2(6, 7, '+'); // => 6 + 7 = 13
calculator2(20, 4, '-'); // => 20 - 4 = 16
calculator2(3, 55, '*'); // => 3 * 55 = 165
calculator2(20, 4, '/'); // => 12 / 4 = 3
*/
// make sure the user always passes all three arguments

calculator2(7, '+'); // <== wrong!
calculator2(6, 7, ''); // <== wrong!


//make sure the user passes numeric values for numbers

calculator2('a', 7, '-'); // <== wrong!


// make sure the user passes a valid operator 

calculator2(6, 7, '='); // <== wrong!
calculator2(6, 7, 'blah'); // <== wrong!

// -------------------------------------------------------------------------------------------------------------------
// forma final con comprobacion de datos

function calculator(num1, num2, operator) {
  // makes sure user always passes three args
  if (!num1 || !num2 || !operator) {
    console.log('Please provide both numbers and operator!');
    return;
  }
  // makes sure user passes numeric values
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Please add a numeric value only!');
    return;
  }

  // make sure the user passes one of the valid operators (+, -, *, /)
  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    console.log('Please provide valid operator.');
    return;
  }

  // initialize a variable that will hold the result
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}
