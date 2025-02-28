// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  return Object.entries(people).map(([id, info]) => ({
    id: parseInt(id),
    ...info,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result = converter(inputPeople);
console.log(result);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do": 2, "or": 1, "not": 1}.

function converter2(strings) {
  let hash = {};

  for (let string of strings) {
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result2 = converter2(inputStrings);
console.log(result2);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, specs) {
  let newHash = {};

  for (let i = 0; i < specs.length; i++) {
    let item = specs[i];
    let name = item.name;
    let color = item.color;
    let weight = item.weight;
    let price = prices[name];
    newHash[name] = { price: price, color: color, wieght: weight };
  }

  return newHash;
}

const inputPrices = { chair: 75, book: 15 };
const specs = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result3 = combiner(inputPrices, specs);
console.log(result3);

// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

const song = new Song("All My Love", "Led Zeppelin", "5:53");
console.log(song);

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(15, 40);
console.log(rectangle);

// Write a Person class with attributes for name and age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const info = new Person("Hank", 29);
console.log(info);
