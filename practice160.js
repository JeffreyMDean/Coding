// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  let array = [];

  for (let id in people) {
    array.push({ id: parseInt(id), ...people[id] });
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result = converter(inputPeople);
console.log(result);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b": 1, "o": 2, "k": 2, "e": 3, "p": 1, "r": 1}.

function converter2(string) {
  let hash = {};

  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] === undefined) {
      hash[string[i]] = 0;
    }
    hash[string[i]]++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result2 = converter2(inputString);
console.log(result2);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, info) {
  let newHash = {};

  for (let i = 0; i < info.length; i++) {
    let name = info[i].name;
    let color = info[i].color;
    let weight = info[i].weight;
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
const result3 = combiner(inputPrices, inputInfo);
console.log(result3);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

function converter3(books) {
  let hash = {};

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let author = book.author;
    let title = book.title;
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
  }

  return hash;
}

const inputBooks = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
const result4 = converter3(inputBooks);
console.log(result4);

function converter4(books) {
  let hash = {};

  books.forEach(({ author, title }) => {
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
  });

  return hash;
}

const inputBooks2 = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
const result5 = converter4(inputBooks2);
console.log(result5);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function switched(hash) {
  return Object.entries(hash).reduce((hash, [key, value]) => {
    hash[value] = key;
    return hash;
  }, {});
}

const inputHash = { a: 1, b: 2, c: 3 };
const result6 = switched(inputHash);
console.log(result6);
