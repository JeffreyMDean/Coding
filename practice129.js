// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

function converter2(items) {
  let array = [];

  for (let key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      array.push([key, items[key]]);
    }
  }

  return array;
}

const inputItems2 = { chair: 100, book: 14 };
const result2 = converter2(inputItems2);
console.log(result2);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter3(people) {
  let newPeople = [];

  for (let id in people) {
    newPeople.push({ id: parseInt(id), ...people[id] });
  }

  return newPeople;
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
    if (Object.prototype.hasOwnProperty.call(people, id)) {
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
