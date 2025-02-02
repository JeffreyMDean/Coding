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

// Object.entries(people) turns the original object into an array of key/value pairs
// .map(([key, value]) => ...) iterates over each pair, using deconstruciton to assign key and value
// => ({ .....})); the parentheses outside the curly braces are for JS to interpret this as an object literal and not a block of code

// side note..after the deconstruction, the real transformation happens when each key-value pair from the original object (now represented as arrays in the form of [key, value]) gets transformed into a new object with id, name, and age properties
// order of operations is it destructures an elment say 321: { name: "Alice", age: 31 }, then goes inside the map call back to return the object literal and then repeat for next element and so on

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.
