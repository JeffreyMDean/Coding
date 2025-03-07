// Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

function printer(number) {
  if (number < 0) {
    console.log(1776);
  } else {
    console.log(1979);
  }
}

const inputNumber = 10;
printer(inputNumber);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    if (hash[strings[i]] === undefined) {
      hash[strings[i]] = 0;
    }
    hash[strings[i]]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result = converter(inputStrings);
console.log(result);

function converter2(strings) {}

const inputStrings2 = ["do", "or", "do", "not"];
const result2 = converter2(inputStrings2);
console.log(result2);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, info) {
  let newHash = {};

  for (let i = 0; i < info.length; i++) {
    let item = info[i];
    let name = item.name;
    let color = item.color;
    let weight = item.weight;
    let price = prices[name];
    newHash[name] = { price: price, color: color, weight: weight };
  }

  return newHash;
}

const inputPrices = { chair: 75, book: 15 };
const inputInfo = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const resul2 = combiner(inputPrices, inputInfo);
console.log(resul2);

// Write a Book class with attributes for title, author, and year.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book = new Book("asdf", "iegtaegf", 2020);
console.log(book);

// Write a Plant class with attributes for name, size, and price.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

const plant = new Plant("Cactus", "Medium", 4);
console.log(plant);
