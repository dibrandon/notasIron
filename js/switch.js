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
  