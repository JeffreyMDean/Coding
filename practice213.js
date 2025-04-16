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
    console.log("Items in cart:");
    this.items.forEach((item) => {
      console.log("-" + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("orange");
cart.addItem("kiwi");
cart.addItem("banana");
cart.displayItems();
cart.removeItem("orange");
cart.displayItems();

// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product = new Product("course", 50, { type: "intro", duration: 2 });
console.log(`Product details:`);
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Metadata: ${JSON.stringify(product.metadata, null, 2)}`);

// JSON.stringify(value, replacer, space)
// -product.metadata is the object to convert
// null in this case means no filtering, include all properties
// 2 is the indentation level (makers the output pretty and readable)
