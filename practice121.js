// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputArray);
console.log(result);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter2(items) {
  return items.reduce((hash, item) => {
    hash[item.id] = item;
    return hash;
  }, {});
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result2 = converter2(inputItems);
console.log(result2);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterCounter(string) {
  let hash = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    i++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result3 = letterCounter(inputString);
console.log(result3);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter3(items) {
  return Object.entries(items);
}

const inputItems2 = { chair: 100, book: 14 };
const result4 = converter3(inputItems2);
console.log(result4);
