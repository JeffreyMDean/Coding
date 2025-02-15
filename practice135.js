// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  let array = [];

  for (let id in people) {
    if (people.hasOwnProperty) {
      array.push({ id: parseInt(id), ...people[id] });
    }
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result = converter(inputPeople);
console.log(result);

function converter2(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople2);
console.log(result2);

// The spread operator automatically extracts and "spreads" all the properties of an object like { name: "Alice", age: 31 } into the new object. The curly braces around value aren't needed as the spread operator does the job of copying those properties into the new object
