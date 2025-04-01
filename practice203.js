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
    console.log("Shopping cart list: ");
    this.items.forEach((item) => {
      console.log("-" + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("fruit");
cart.addItem("veggie");
cart.addItem("butter");
cart.displayItems();
cart.removeItem("fruit");
cart.displayItems();

// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product1 = new Product("pdf", 25, {
  name: "tutorial",
  author: "Dr. Angela Yu",
  version: 2.0,
});
console.log(product1);

class Products {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product2 = new Products("pdf", 25, {
  title: "tutorial",
  author: "Dr. Angela Yu",
  version: 2.0,
});
console.log("Producrt Details:");
console.log(`Name: ${product2.name}`);
console.log(`Price: ${product2.price}`);
console.log(`Metadata: ${JSON.stringify(product2.metadata, null, 2)}`);
console.log(`Title: ${product2.metadata.title}`);
console.log(`Author: ${product2.metadata.author}`);
console.log(`Version: ${product2.metadata.version}`);
