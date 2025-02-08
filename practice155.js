// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter(strings) {
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
const result = converter(inputStrings);
console.log(result);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter2(hash) {
  let flatArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flatArray.push(key, value);
  });

  return flatArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash);
console.log(result2);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter3(people) {
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
const result3 = converter3(inputPeople);
console.log(result3);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

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
const inputInformation = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result4 = combiner(inputPrices, inputInformation);
console.log(result4);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter4(books) {
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
const result5 = converter4(inputBooks);
console.log(result5);
