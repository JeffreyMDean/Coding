// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter(array) {
  let hash = {};
  let i = 0;

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
    i++;
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
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i]["id"];
    let value = items[i];
    hash[key] = value;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result2 = converter2(inputItems);
console.log(result2);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter3(people) {
  let array = [];
  const entries = Object.entries(people);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    array.push({ id: parseInt(key), ...value });
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result3 = converter3(inputPeople);
console.log(result3);

function converter4(people) {
  let array = [];

  for (let id in people) {
    if (people.hasOwnProperty) {
      array.push({ id: parseInt(id), ...people[id] });
    }
  }

  return array;
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result4 = converter4(inputPeople2);
console.log(result4);

function converter5(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople3 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result5 = converter5(inputPeople3);
console.log(result5);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter6(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(function (key, value) {
    flattenedArray.push(key);
    flattenedArray.push(value);
  });

  return flattenedArray;
}
const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result6 = converter6(inputHash);
console.log(result6);

function converter7(hash) {
  let flattenedArray = [];

  for (let key in hash) {
    if (hash.hasOwnProperty(key)) {
      flattenedArray.push(key, hash[key]);
    }
  }

  return flattenedArray;
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result7 = converter7(inputHash2);
console.log(result7);
