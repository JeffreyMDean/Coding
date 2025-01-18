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

// Object.entries(people) takes the people object and turns it into an array of [key, value] pairs
// .map method loops over each element of the array and runs a function on it to transform that element returning a new array with the transformed values
// So, .map takes a callback that reieves key and value (in this case it's destrcutring)
// ...value is where destrcutring comes in. The value is the object containing the name and age { name: "Alice", age: 31 }, and the ...value is using the spread operator to copy all the properties of value into the new object effectively adding name and age properties into the new object.

// Object.entries(people) is transorming the object into an array of key-value pairs. Each element in this array is a two-element array, where the first item is the key (the ID), and the second item is the value (the object with name and age)
// .map(([key, value]) => ({ ... })): .map() is taking each pair from Object.entries(), transforming it by converting the key into an integer, and merging the value (the person's name and age) into the result
// Destructuring is unpacking the [key, value] pairs from the array created by Object.entries() allowing you to access both parts of the pair direectly
