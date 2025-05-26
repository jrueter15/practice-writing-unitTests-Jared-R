const ct = require("./cart");

console.log("Welcome to the store! Grab a cart!");
let cart = {};

ct.getTotalItems(cart);

// Test add item with a valid option, not a string, not a number
ct.addItem(cart, "eggplant", 5);
ct.addItem(cart, "apples", 2);
ct.addItem(cart, "oranges", 12);
ct.addItem(cart, "spinaches", 2);

console.log(cart);

// test a correct item, a non-existent item, a number, etc.
ct.removeItem(cart, "spinaches");

ct.getTotalItems(cart);