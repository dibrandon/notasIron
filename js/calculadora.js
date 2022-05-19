// Function Calc

function calc ( symbol,firstNumber, secondNumber) {

    if(symbol === "+"){
       console.log(firstNumber + secondNumber)
    }
    else if (symbol === "-"){
        console.log(firstNumber - secondNumber)

    }
else if (symbol === "*"){
    console.log(firstNumber * secondNumber)

}
else if (symbol === "/"){
    console.log(firstNumber / secondNumber)

}
else{
    console.log("Error en parametros dados")
}
    
}

calc ("+", 2, 2); // expected 4

// calc basica sin IFs

// STEP 1:
 
function calculateSum(num1, num2) {
    return num1 + num2;
  }
   
  function printResult() {
    // in the line below, the function result will be stored inside the variable: result
    const result = calculateSum(3, 6);
    console.log(`The result is ${result}.`);
  }
   
  printResult();