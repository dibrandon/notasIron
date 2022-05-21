const person = {
    name: "bob",
    age: 42
}
console.log(typeof person)

const teddyBear = {
    texture: "fluffy"

}
console.log( teddyBear["texture"])

const user = { 
    name: 'Bob',
    surname: 'Martin',
    age: 25,
    address: {
      country: "USA"
    }
  }
  
 // for (let key in product) {
   // console.log(`Key of the property: ${key}, Value of the property: ${product[key]}`)

// function printBio (user) {
//     for (let key in user) {
//         if ("addres" in user) {
//             for (let key in address) {
//                 let take = address.country
//             }
//             return `This is ${user.name} ${user.surname} from ${take}.`
            
//         }
//     }
//   };
// arriba intento 1, mal

// ahora intento 2

function printBio (user) {
    // Your code here

    return `This is ${user.name} ${user.surname} from ${user.address.country}.`
  


  }

  // funciono :=)

  function filterPizzas(pizzas) {
    let newArray = []


    return newArray
  }
// solucion...
  function filterPizzas(pizzas) {
    // your code
    return pizzas.filter( ({type}) => type !== "pineapple");
  }

  // solucion de iron

  function filterPizzas(pizzas) {
    const filteredPizzas = [];
    
    for (let i = 0; i < pizzas.length; i++) {
      const pizza = pizzas[i];
      const pizzaType = pizza.type;
      const isNotPineapple = pizzaType !== "pineapple";
      
      if (isNotPineapple) {
        filteredPizzas.push(pizza);
      }
    }
    
    return filteredPizzas;
  }