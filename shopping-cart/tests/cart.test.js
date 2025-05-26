// Grabbing our existing functions
const { addItem, removeItem, getTotalItems } = require("../cart");

// Grouping the addItem tests together
describe("addItem", function () {
  // Description is just for me/developers to tell what's going on
  test("Should log a quantity of an item message.", function () {
    let cart = {};
    // Tells jest to pretend to log the console, watch it, and remember what it says
    // spyOn is a special jest function to watch another function
    // Jest, watch the log function of the console object
    // Fake version of it, if someone calls it, do nothing

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    // Running the function
    addItem(cart, "Jest", 3);
    // Expecting our spy to have seen this exact message
    expect(consoleSpy).toHaveBeenCalledWith(
      "\nYou have added 3 of the Jest to your shopping cart"
    );
    // Stop pretending
    consoleSpy.mockRestore();
  });

  test("Should have items in cart.", function () {
    let cart = {};
    addItem(cart, "Jest", 3);
    expect(cart["Jest"]).toBe(3);
  });

  test("Should log a message if the item is not a string.", function () {
    let cart = {};
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    addItem(cart, 0, 3);
    expect(consoleSpy).toHaveBeenCalledWith(
      "\nCan't add that item as it's not a string"
    );
    consoleSpy.mockRestore();
  });

  test("Should log a message if the quantity is not a number.", () => {
    let cart = {};
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    addItem(cart, "Jest", NaN);
    expect(consoleSpy).toHaveBeenCalledWith("\nA proper number is required");
    consoleSpy.mockRestore();
  });

  test("Should return a string when provided a 0 for quantity.", () => {
    let cart = {};
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    addItem(cart, "Jest", 0);
    expect(consoleSpy).toHaveBeenCalledWith("\nA proper number is required");
    consoleSpy.mockRestore();
  });
});

describe("removeItem", () => {
  test("Should not have provided item in cart", () => {
    let cart = {
      apples: 3,
      bananas: 5,
    };
    removeItem(cart, "apples");
    // Does the cart still contain a key called apples?
    // I expect it to be false
    expect(cart.hasOwnProperty("apples")).toBe(false);
  });

  test("Should log a removal message", () => {
    let cart = {
      apples: 3,
      bananas: 5,
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    removeItem(cart, "apples");
    expect(consoleSpy).toHaveBeenCalledWith(
      "\nYou removed apples from your shopping cart."
    );
    consoleSpy.mockRestore();
  });

  test("Should log a message that the provided item wasn't in the cart", () => {
    let cart = {
      apples: 3,
      bananas: 5,
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    removeItem(cart, "cucumbers");
    expect(consoleSpy).toHaveBeenCalledWith(`\ncucumbers wasn't in your cart!`);
    consoleSpy.mockRestore();
  });

  test("Should remove item even if quantity is 0", () => {
    let cart = {
      apples: 0,
      bananas: 5,
    };
    removeItem(cart, "apples");
    expect(cart.hasOwnProperty("apples")).toBe(false);
  });
});

// Function logs the cart, loops through the cart to log each key, while also adding up the total quantity
describe("getTotalItems", () => {
  test("Should have correct total items", () => {
    let cart = {
      apples: 11,
      bananas: 5,
      watermelons: 1,
      oranges: 3,
    };
    getTotalItems(cart);
    expect(getTotalItems.totalItems === 20);
  });

  test("Should log an empty cart", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    let cart = {};
    getTotalItems(cart);
    expect(consoleSpy).toHaveBeenCalledWith(
      `\nYou don't have anything in your cart.`
    );
    consoleSpy.mockRestore();
  });

  test("Should return a helpful statement when provided with a null or undefined", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    getTotalItems(null);
    expect(consoleSpy).toHaveBeenCalledWith(
      "\nYou have to provide a valid cart."
    );
    consoleSpy.mockRestore();
  });
});
