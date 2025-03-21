// Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  displayItems() {
    console.log("Items in cart");
    this.items.forEach((item) => {
      console.log("-" + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("banana");
cart.addItem("apple");
cart.addItem("berry");
cart.displayItems();
cart.removeItem("banana");
cart.displayItems();

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle);
console.log(rectangle.area());

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, info) {
  let hash = {};

  for (let i = 0; i < info.length; i++) {
    let name = info[i].name;
    let color = info[i].color;
    let weight = info[i].weight;
    let price = prices[name];
    hash[name] = { price: price, color: color, weight: weight };
  }

  return hash;
}

const inputPrices = { chair: 75, book: 15 };
const inputInfo = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result2 = combiner(inputPrices, inputInfo);
console.log(result2);
