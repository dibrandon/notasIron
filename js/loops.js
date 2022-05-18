// Loops and iterations
//What is a loop?
//
// A loop is a sequence of instructions that is repeated until a specific condition is met. Using a loop simply means: Repeat this code until some condition is true.


while (condition) {
  // code to be executed while the condition is true
}
// The while loop in JavaScript has 2 key parts:

// the condition - once the condition is false, the loop will end;
// the code to execute - the purpose of the loop is to run some code a certain number of times.

// contador desde 1 a 10
let counter = 1;

while (counter <= 10){
  console.log(counter);
  counter += 1;
} 

// contador desde 30 a 0

let counter2 = 30; // <= 1. counter will now start at 30
 
// 2. loop will now run while counter is higher or equal than 0
while (counter2 >= 0) {
  console.log(counter2);
  counter2 -= 1; // <= 3. instead of increasing, decrease counter by 1
}

// loop con FOR
for (let i = 1; i <= 10; i++){
    console.log(i);
}
// Using a for loop, display a countdown from 10 to 0. You will need to write i-- in your for a loop. Inside the loop, write a console.log of the variable i and also, if i reached 0, console.log “Boom!”

for (let i = ""; i.length <= 10; i += "*"){
    console.log(i);
}
for (let i = 10; i >= 0; i--) {
    console.log("boom!");
    
}


// ejemplo de uso de break para salir de un loop
for (let i = 1; i <= 30; i++){
    if (i === 21){
      console.log("TWENTY ONE! Black Jack, dale!");
      break;
    } else {
      console.log(i);
    }
  }
  // Sometimes you want to skip an iteration in a loop and continue to the next. If so, use the continue keyword in your loop combined with some sort of condition.
  
  for (let i = 1; i <= 30; i++){
    if (i % 3 === 0) { 
      continue; 
    }
    console.log(i);
  }
  