// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterCounter(string) {
  let hash = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    i++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result = letterCounter(inputString);
console.log(result);

function letterCounter2(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString2 = "bookkeeper";
const result2 = letterCounter2(inputString2);
console.log(result2);

function letterCounter3(string) {
  return string.split("").reduce((hash, letter) => {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    return hash;
  }, {});
}

const inputString3 = "bookkeeper";
const result3 = letterCounter3(inputString3);
console.log(result3);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result4 = converter(inputItems);
console.log(result4);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(person) {
  let newPerson = [];

  for (let id in person) {
    if (Object.prototype.hasOwnProperty.call(person, id)) {
      newPerson.push({ id: parseInt(id), ...person[id] });
    }
  }

  return newPerson;
}

const inputPerson = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result5 = converter2(inputPerson);
console.log(result5);
