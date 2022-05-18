//The switch statement evaluates an expression, matching the expression’s value to a case clause, and executes statements (instruction blocks) associated with that case.

switch (expression) {
    case value1:
      // statements executed when the result of expression matches value1
      break;
    case value2:
      // statements executed when the result of expression matches value2
      break;
    
    case valueN:
      // statements executed when the result of expression matches valueN
      break;
    default:
      // statements executed when none of the values match the value of the expression
      break;
  }
  
  //ejemplo

  let pet = "dog";

switch (pet) {
  case "cat":
    console.log("I will break a lot of things but hey, I'm adorable ... ")
    break;
  case "dog":
    console.log("I will be a bit annoying but I'm your best friend ... ")
    break;
  case "hamster":
    console.log("I will be impossible to find but I'm reeeeaaaally cute ... ")
    break;
  default:
    console.log("I'm a special pet!")
    break;
}
//To avoid code redundancy in switch statements, you can even write multiple cases to run the same block of code, like shown below:

switch (expression) {
    case value1:
    case value2:
      // statements executed when the result of expression matches value1 or value2
      break;
    case value3:
    case value4:
    case value5:
      // statements executed when the result of expression matches value3, value4 or value5.
      break;
    default:
      // statements executed when none of the values match the value of the expression
      break;
  }
  

  const fruit  = prompt ("Enter the fruit name:");
  let type = "";
  
  switch (fruit) {
    case "apple": 
    case "pear":
      type = "pome"
      break;
      
    case "peach":
    case "coconut":
      type = "drupe"
      break;
      
    case "strawberry":
    case "bluebery":
    case "blackberry":
      type = "berry"
      break;
    case "beans":
    case "peas":
      type = "legumes"
      break;
    default: 
      type = "other"
      break;
  }
      console.log(`${fruit} is type of: ${type}.`)
  
// ejercicio piedra papel tijera
let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = rock
let secondPlayerChoice = 123

let firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
let secondPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let thirdPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;

let fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors
let fifthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock
let sixthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;



if (firstPossibility ||
    secondPossibility ||
    thirdPossibility) {
        console.log("First player won!")
    } else
if (fourthPossibility ||
     fifthPossibility ||
    sixthPossibility) {
        console.log("Second player won!")
    
 }

 else if (seventhPossibility) {
     console.log("It's a tie")
 } else {
     console.log("Something went wrong!")
 }


 // As a bonus, try to convert the conditional into a switch statement.
