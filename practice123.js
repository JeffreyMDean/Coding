// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

function lengthOfStrings(sports) {
  return sports.reduce((total, sport) => {
    return total + sport.length;
  }, 0);
}

const inputSports = ["volleyball", "basketball", "badminton"];
const result = lengthOfStrings(inputSports);
console.log(result);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function hashConverter(array) {
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
const result2 = hashConverter(inputArray);
console.log(result2);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function hashConverter2(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result3 = hashConverter2(inputString);
console.log(result3);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter3(items) {
  return items.reduce((hash, item) => {
    hash[item.id] = item;
    return hash;
  }, {});
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result4 = hashConverter3(inputItems);
console.log(result4);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function arrayOfArraysConverter(items) {
  return Object.entries(items);
}

const inputItems2 = { chair: 100, book: 14 };
const result5 = arrayOfArraysConverter(inputItems2);
console.log(result5);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function arrayOfHashesConverter(people) {
  let newArray = [];

  for (let id in people) {
    if (Object.prototype.hasOwnProperty.call(people, id)) {
      newArray.push({ id: parseInt(id), ...people[id] });
    }
  }

  return newArray;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result6 = arrayOfHashesConverter(inputPeople);
console.log(result6);
