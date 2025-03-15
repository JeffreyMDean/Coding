// Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  categorizer() {
    if (this.year < 2000) {
      return "Classic";
    } else {
      return "Modern";
    }
  }
}

const book = new Book("Comfortable with Uncertainty", "Pema Chodran", 2002);
console.log(book);
console.log(book.categorizer());

// Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  printInfo() {
    return `The plant is a ${this.size} ${this.name} that costs $${this.price}.00.`;
  }
}

const plant = new Plant("Tulip", "Medium", 2.0);
console.log(plant);
console.log(plant.printInfo());

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b": 1, "o": 2, "k": 2, "e": 3, "p": 1, "r": 1}.

function converter(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }
  return hash;
}

const inputString = "bookkeeper";
const result = converter(inputString);
console.log(result);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(people) {
  let array = [];

  for (let key in people) {
    array.push({ id: parseInt(key), ...people[key] });
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople);
console.log(result2);
