// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, specs) {
  let newHash = {};
  let i = 0;

  while (i < specs.length) {
    let name = specs[i]["name"];
    let color = specs[i].color;
    let weight = specs[i].weight;
    let price = prices[name];
    newHash[name] = { price: price, color: color, weight: weight };
    i++;
  }

  return newHash;
}

const inputPrices = { chair: 75, book: 15 };
const inputSpecs = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result = combiner(inputPrices, inputSpecs);
console.log(result);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter(books) {
  let hash = {};

  for (let i = 0; i < books.length; i++) {
    let author = books[i].author;
    let title = books[i].title;
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
const result2 = converter(inputBooks);
console.log(result2);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function switcher(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash = { a: 1, b: 2, c: 3 };
const result3 = switcher(inputHash);
console.log(result3);
