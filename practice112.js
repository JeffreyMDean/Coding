// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(items) {
  let hash = {};

  items.forEach((item) => {
    let key = item.id;
    let value = item;
    hash[key] = value;
  });

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result2 = hashConverter(inputItems);
console.log(result2);

function hashConverter2(items) {
  return items.reduce((hash, item) => {
    return (hash[item.id] = item);
  }, {});
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result3 = hashConverter(inputItems2);
console.log(result3);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterCounter(string) {
  let letterFrequencies = {};
  let i = 0;

  while (i < string.length) {
    if (letterFrequencies[string[i]] === undefined) {
      letterFrequencies[string[i]] = 0;
    }
    letterFrequencies[string[i]] += 1;
    i++;
  }

  return letterFrequencies;
}

const inputString = "bookkeeper";
const result4 = letterCounter(inputString);
console.log(result4);

function letterCounter2(string) {
  let letterFrequencies = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (letterFrequencies[letter] === undefined) {
      letterFrequencies[letter] = 0;
    }
    letterFrequencies[letter]++;
    i++;
  }

  return letterFrequencies;
}

const inputString2 = "bookkeeper";
const result5 = letterCounter2(inputString2);
console.log(result5);
