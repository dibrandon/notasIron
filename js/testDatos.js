const person = {
  name: "bob",
  age: 42
}
console.log(typeof person)

const teddyBear = {
  texture: "fluffy"

}
console.log(teddyBear["texture"])

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

function printBio(user) {
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
  return pizzas.filter(({ type }) => type !== "pineapple");
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

function sum(x, y) {
  x + y;
}
console.log(sum(10, 5))

const matrix = [
  [
    { product: "t1", price: 123, category: 'tech' },
    { product: "f1", price: 45, category: 'food' },
  ],

  [
    { product: "f2", price: 6.78, category: 'food' },
    { product: "t2", price: 910, category: 'tech' },
  ],

]

function sortProducts(matrix) {
  let newArr = []



}



function sortProducts(matrix) {
  newMatrix = {
    tech: [],
    food: []
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let b = 0; b < matrix[i].length; b++) {
      if (matrix[i][b].category == 'tech') {
        newMatrix.tech.push(matrix[i][b]);
      } else if (matrix[i][b].category == 'food') {
        newMatrix.food.push(matrix[i][b]);
      }
    }
  }
  return  newMatrix;
}

// iron solucion

function sortProducts (matrix) {
  const tech = [];
  const food = [];
  
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    for (let j = 0; j < arr.length; j++) {
      const product = arr[j];
      
      if ( product.category === 'tech') {
        tech.push(product);
      }
      else if (product.category === 'food') {
        food.push(product);
      }
    };
  };  
  
  return {
    tech: tech,
    food: food,
  }
}





