// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(people) {
  let newPeople = [];

  for (let id in people) {
    if (Object.prototype.hasOwnProperty.call(people, id)) {
      newPeople.push({ id: parseInt(id), ...people[id] });
    }
  }

  return newPeople;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople);
console.log(result2);

function converter3(people) {
  let newPeople = [];

  Object.entries(people).forEach(([id, person]) => {
    person.id = parseInt(id);
    newPeople.push({ id: parseInt(id), ...person });
  });

  return newPeople;
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result3 = converter3(inputPeople2);
console.log(result3);
