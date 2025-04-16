// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product = new Product("Tutorial", 100, {
  type: "intro",
  duration: 3,
  credits: 1.5,
});
console.log("Product details:");
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Metadata: ${JSON.stringify(product.metadata, null, 2)}`);
