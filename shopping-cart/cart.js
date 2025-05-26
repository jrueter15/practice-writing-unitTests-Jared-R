//const readline = require("require-sync");

function addItem(cart, item, quantity) {
  if (isNaN(quantity) || quantity <= 0) {
    console.log("\nA proper number is required");
    return;
  }
  if (typeof item !== "string") {
    console.log("\nCan't add that item as it's not a string");
    return;
  }
  if (cart[item]) {
    cart[item] += quantity;
  } else {
    cart[item] = quantity;
  }
  console.log(
    `\nYou have added ${quantity} of the ${item} to your shopping cart`
  );
}

function removeItem(cart, item) {
  if (cart.hasOwnProperty(item)) {
    delete cart[item];
    console.log(`\nYou removed ${item} from your shopping cart.`);
  } 
  else {
    console.log(`\n${item} wasn't in your cart!`);
  }
}

function getTotalItems(cart) {
  if(!cart){
    console.log('\nYou have to provide a valid cart.');
    return;
  }
  if(Object.keys(cart).length === 0){
    console.log(`\nYou don't have anything in your cart.`);
    return;
  }
  let totalItems = 0;
  console.log(cart);
  console.log("\nYou have: ");
  for (let item in cart) {
    console.log(item);
    totalItems += cart[item];
  }

  console.log(`\nYour total number of items is: ` + totalItems);
}

module.exports = {addItem, removeItem, getTotalItems};
