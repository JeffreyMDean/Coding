// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result = converter(inputPeople);
console.log(result);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter2(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash);
console.log(result2);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

function combiner(items, details) {
  let newHash = {};
  let i = 0;

  while (i < details.length) {
    let info = details[i];
    let name = info.name;
    let color = info.color;
    let weight = info.weight;
    let price = items[name];
    newHash[name] = { price: price, color: color, weight: weight };
    i++;
  }

  return newHash;
}

const inputItems = { chair: 75, book: 15 };
const inputDetails = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
const result3 = combiner(inputItems, inputDetails);
console.log(result3);
