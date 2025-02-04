// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function singleString(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = singleString(inputStrings);
console.log(result);

function singleString4(strings) {
  let singleString = "";

  for (let string of strings) {
    singleString = singleString + string;
  }

  return singleString;
}

const inputStrings4 = ["volleyball", "basketball", "badminton"];
const result4 = singleString4(inputStrings4);
console.log(result4);
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
const result2 = converter(inputString);
console.log(result2);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

function combiner(prices, specs) {
  let hash = {};
  let i = 0;

  while (i < specs.length) {
    let spec = specs[i];
    let name = spec.name;
    let color = spec.color;
    let weight = spec.weight;
    let price = prices[name];
    hash[name] = { price: price, color: color, weight: weight };
    i++;
  }

  return hash;
}

const inputPrices = { chair: 75, book: 15 };
const inputSpecs = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result3 = combiner(inputPrices, inputSpecs);
console.log(result3);
