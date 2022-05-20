// terminado, funciona!

let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: 'Bob'
  };

  for (let key in product) {
      console.log(`Key of the property: ${key}, Value of the property: ${product[key]}`)
  }//   muy similar a 
 // for (let i = 0; i < anArray.length; i++)  {
 //     console.log()
 // }   key seria i 
 
 // the delete keyword completely deletes any indicated property
delete product.previousOwner;
 
// using dot notation to update the value of a property
product.doesItWork = true;
if (product.price > 100){
    product.discountPercentage = 10;
}
// using values of both product.price and product.discountPercentage
product.price -= product.price * (product.discountPercentage / 100)

if ("discountPercentage" in product){
    console.log(`We got some ${product.name} on sale forr just ${product.price}`)
}

// funciona! no tocar.

const me = {var age=31, var hair=brown}