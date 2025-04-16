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

// Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinate {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  printer() {
    return (
      "The latitude is " +
      this.latitude +
      " and the longitude is " +
      this.longitude +
      "."
    );
  }
}

const coordinate = new Coordinate(30, 80);
console.log(coordinate);
console.log(coordinate.printer());

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(hash) {
  return Object.entries(hash);
}

const inputHash = { chair: 100, book: 14 };
const result = converter(inputHash);
console.log(result);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter2(hash) {
  let flatArray = [];
  Object.entries(hash).forEach(([key, value]) => {
    flatArray.push(key, value);
  });
  return flatArray;
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash2);
console.log(result2);
