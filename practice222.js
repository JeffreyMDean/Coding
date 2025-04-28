// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(items) {
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result = converter(inputItems);
console.log(result);

function converter2(items) {
  return items.reduce((hash, item) => {
    let key = item.id;
    let value = item;
    hash[key] = value;
    return hash;
  }, {});
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result2 = converter2(inputItems2);
console.log(result2);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b": 1, "o": 2, "k": 2, "e": 3, "p": 1, "r": 1}.

function converter3(string) {
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
const result3 = converter3(inputString);
console.log(result3);
