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
