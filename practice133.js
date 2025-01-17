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

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter2(items) {
  return Object.entries(items);
}

const inputItems2 = { chair: 100, book: 14 };
const result2 = converter2(inputItems2);
console.log(result2);

function converter3(items) {
  let array = [];

  for (let key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      array.push([key, items[key]]);
    }
  }

  return array;
}

const inputItems3 = { chair: 100, book: 14 };
const result3 = converter3(inputItems3);
console.log(result3);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter4(people) {
  let array = [];

  for (let id in people) {
    if (Object.prototype.hasOwnProperty.call(people, id)) {
      array.push({ id: parseInt(id), ...people[id] });
    }
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result4 = converter4(inputPeople);
console.log(result4);

function converter5(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result5 = converter5(inputPeople2);
console.log(result5);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter6(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    if (hash[strings[i]] === undefined) {
      hash[strings[i]] = 0;
    }
    hash[strings[i]]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result6 = converter6(inputStrings);
console.log(result6);

function converter7(strings) {
  let hash = {};

  for (let string of strings) {
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
  }

  return hash;
}

const inputStrings2 = ["do", "or", "do", "not"];
const result7 = converter7(inputStrings2);
console.log(result7);
