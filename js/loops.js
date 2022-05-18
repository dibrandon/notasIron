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