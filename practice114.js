// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let pairsObject = {};
  let i = 0;

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputArray);
console.log(result);

function converter2(array) {
  let pairsObject = {};

  array.forEach((pair) => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter(inputArray2);
console.log(result2);

function converter3(array) {
  return array.reduce((hash, pair) => {
    hash[pair[0]] = pair[1];
    return hash;
  }, {});
}

const inputArray3 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = converter(inputArray3);
console.log(result3);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(items) {
  let hash = {};
  let i = 0;

  while (i < items.length) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result4 = hashConverter(inputItems);
console.log(result4);

function hashConverter2(items) {
  let hash = {};

  items.forEach((item) => {
    let key = item.id;
    let value = item;
    hash[key] = value;
  });

  return hash;
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result5 = hashConverter2(inputItems2);
console.log(result5);

function hashConverter3(items) {
  return items.reduce((hash, item) => {
    hash[item.id] = item;
    return hash;
  }, {});
}

const inputItems3 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result6 = hashConverter3(inputItems3);
console.log(result6);

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
const result7 = letterCounter(inputString);
console.log(result7);
