// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1: {id: 1, color: "blue", price: 32}, 2: {id: 2, color: "red", price: 12}}.

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

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter2(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach((pair) => {
    const [key, value] = pair;
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash);
console.log(result2);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function converter3(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash2 = { a: 1, b: 2, c: 3 };
const result3 = converter3(inputHash2);
console.log(result3);
