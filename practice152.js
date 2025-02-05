// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = 3;
  return letters;
}

const inputLetters = ["a", "m", "b", "q"];
const result = letterChanger(inputLetters);
console.log(result);

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
const result2 = converter(inputHash);
console.log(result2);

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
const inputInfo = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result3 = combiner(inputPrices, inputInfo);
console.log(result3);
