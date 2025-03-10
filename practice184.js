// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do": 2, "or": 1, "not": 1}.

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

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

function combiner(prices, info) {
  let newHash = {};

  for (let i = 0; i < info.length; i++) {
    let name = info[i]["name"];
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
const result2 = combiner(inputPrices, inputInfo);
console.log(result2);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

function converter2(books) {
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
const result3 = converter2(inputBooks);
console.log(result3);
