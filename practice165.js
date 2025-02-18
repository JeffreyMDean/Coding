// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(items) {
  let newHash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i].id;
    let value = items[i];
    newHash[key] = value;
  }

  return newHash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result = converter(inputItems);
console.log(result);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b": 1, "o": 2, "k": 2, "e": 3, "p": 1, "r": 1}.

function converter2(string) {
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
const result2 = converter2(inputString);
console.log(result2);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter3(hash) {
  let array = [];

  Object.entries(hash).forEach(([key, value]) => {
    array.push(key, value);
  });

  return array;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result3 = converter3(inputHash);
console.log(result3);
