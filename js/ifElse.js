//condiciones para los IF, buscan true en la condicion por defecto
//  NOT
let doesCode = true;
if (!doesCode){
  console.log("Ironhack is right place to be!");
}

// AND
let lovesParty = true;
if (doesCode && lovesParty){
  console.log("You seem to be an Ironhacker!");
}

// OR
let framework = "Express"
if (doesCode && (framework === "Express" || framework === "React")){
  console.log("You are a smart developer!");
}


// The else statement is executed when the if statement condition is false.

let isStudent = true;
let hardWork = 9;

if (isStudent) {
  console.log('Welcome to Ironhack :)');

  if (hardWork > 8) {
    console.log('You will be a great developer!');
  } else {
    console.log('You need to work harder... ');
  }
}

// console output:
// 'Welcome to Ironhack :)'
// 'You will be a great developer!'

//To be able to chain multiple conditions, we use else if statements. The else if statement is executed when the previous if or else if statement condition is false.

// NOTA IMPORTANTE:
// One very important syntax rule to follow when writing your if, else if and else statements is:

// if and else if statements always require a condition in order to work,
// else statements do not need a condition, as it means to run the block of code in every other possible case.


if (condition1) {
    // statements
  } else if (condition2) {
    // statements
  } else if (condition3) {
    // statements
  } else {
    // if all above turn to be false,
    // this block of code will be executed
  }
  
  // ejemplo

  let hardWork2 = 7;

if (hardWork2 > 8) {
  console.log("You will be a great developer!");
} else if (hardWork2 > 6) {
  console.log("You're getting better, but you could be working harder!");
} else {
  console.log("You're slacking. I saw you fall asleep on the desk.");
}

// Multiples IF TRUE

let hardWork3 = 9;

if (hardWork3 > 8) {
  console.log("You will be a great developer!");
} 
else if (hardWork3 > 6) {
  console.log("You are improving, keep going!");
}
else if (hardWork3 >= 5) {
  console.log("You need to work harder... ");
}
else {
  console.log("You're slacking. I saw you fall asleep on the desk.");
}
// expected output "you will be a great developer!"
// In this example, the value of variable hardWork is 9:

//it will evaluate the first condition,
//it will execute the first statement block since the condition is true,
//finally, it will finish the conditional block, skipping all the following conditions.
//Once a condition of an if statement is true, it will execute the statements inside {} and skip all the other conditions in the same block.