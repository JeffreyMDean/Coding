// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result = converter(inputHash);
console.log(result);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

function combiner(prices, items) {
  let hash = {};
  let i = 0;

  while (i < items.length) {
    let item = items[i];
    let name = item.name;
    let color = item.color;
    let weight = item.weight;
    let price = prices[name];
    hash[name] = { price: price, color: color, weight: weight };
    i++;
  }

  return hash;
}

const inputPrices = { chair: 75, book: 15 };
const inputItems = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result2 = combiner(inputPrices, inputItems);
console.log(result2);
