const myArray = [3,6,2,1,9]

let lastElement = myArray.pop()

let firstElement =myArray.shift()

myArray.shift(lastElement)
myArray.push(firstElement)
console.log(myArray)

