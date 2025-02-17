// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  let flattenedArray = [];

  for (let letter in hash) {
    flattenedArray.push(letter, hash[letter]);
  }

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result = converter(inputHash);
console.log(result);

function converter2(hash) {
  return Object.entries(hash).reduce((flat, [key, value]) => {
    flat.push(key, value);
    return flat;
  }, []);
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash2);
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
const result3 = combiner(inputPrices, inputInfo);
console.log(result3);
