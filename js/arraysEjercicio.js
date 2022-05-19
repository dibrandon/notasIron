// falle, debia de usar el metodo .unshit al agregar el elemento quitado previamente
const myArray = [3,6,2,1,9]

let lastElement = myArray.pop()

let firstElement =myArray.shift()

myArray.unshift(lastElement)
myArray.push(firstElement)
console.log(myArray)

