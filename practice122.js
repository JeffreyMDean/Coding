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
  let peopleArray = [];

  for (let id in people) {
    // if (people.hasOwnProperty(id)) {
    if (Object.prototype.hashOwnProperty.call(people, id)) {
      peopleArray.push({ id: parseInt(id), ...people[id] });
    }
  }

  return peopleArray;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople);
console.log(result2);

// .hasOwnProperty(id) is chekcing that the current (id) exists directly in the object and not inherited from Object.prototype

// calling hasOwnProperty on Object.prototype and passing in the object (people) and the key (id) as arguments
// people is the object being checked and is the target object that you want to check if it has the property id as its own property
// id the property name (or key) you're checking for in the people object. the id is a variable representing the current property name (or key) in the iteration, coming from the for...in loop. The loop iterates through each property (or key) in the people object, and for each iteration, id is the current key (like "321" or "322")

// Object.prototype.hasOwnProperty accesses the hasOwnProperty method from Object.prototype (ensuring it's the original, unmodified version)
// .call(people, id) ensures that hasOwnProperty is called on the people object, with the id (which is a key in the people object) passed as an argument
// people is the object being checked
// id is the current key from the people object you're chekcing to see if it exists as an own property of people
