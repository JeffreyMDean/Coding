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

function converter2(array) {
  return array.reduce((hash, pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter2(inputArray2);
console.log(result2);

function converter3(array) {
  return array.reduce((hash, pair) => {
    const [key, value] = pair;
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray3 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = converter3(inputArray3);
console.log(result3);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter4(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result4 = converter4(inputItems);
console.log(result4);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter5(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result5 = converter5(inputPeople);
console.log(result5);

function converter6(people) {
  let array = [];

  for (let key in people) {
    if (people.hasOwnProperty) {
      array.push({ id: parseInt(key), ...people[key] });
    }
  }

  return array;
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result6 = converter6(inputPeople2);
console.log(result6);
