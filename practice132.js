// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

// Object.entries same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
// use Object.keys() for property keys and Object.values() if you only need the property values

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(people) {
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
const result2 = converter2(inputPeople);
console.log(result2);

function converter3(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result3 = converter3(inputPeople2);
console.log(result3);

function converter4(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople3 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result4 = converter4(inputPeople);
console.log(result4);
