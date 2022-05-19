let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo';

let allTurtles = '';
allTurtles = allTurtles + turtle1;
console.log(allTurtles)

allTurtles += ' ' + turtle2 + ' '+turtle3 + ' '+ turtle4
console.log(allTurtles)
console.log(allTurtles.indexOf('Dona'));
console.log(allTurtles.length);
let firstHalfTurtles
let secondHalfTurtles
firstHalfTurtles = allTurtles.slice(0, 16);
console.log(firstHalfTurtles);

secondHalfTurtles = allTurtles.slice(17)
console.log(secondHalfTurtles);
console.log('My favorites are: ' + secondHalfTurtles)


function werewolfCheck (name) {
  werewolfCheck.indexOf("were")
}