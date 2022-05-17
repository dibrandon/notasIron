// All values are truthy unless they are defined as falsy. The falsy values in JavaScript are:
0; // <-- The Number zero
(''); // <-- An empty String
false; // <-- The Boolean value: false
undefined;
null;
NaN;

let powerOn = true; // => boolean
let isRaining = false; // => boolean
console.log(true && false); // ==> ?false bien
console.log(11 % 3 === 2); // ==> ? false mal (no entiendo ese porcentaje)
console.log(false || true); // ==> ? true bien
console.log(!true || false); // ==> ? false bien
console.log(17 == '17'); // ==> ? false mal (solo compara el dato, no el tipo)
console.log(123 === '123'); // ==> ? false bien

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
