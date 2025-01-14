// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function converter(string) {
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
const result = converter(inputString);
console.log(result);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter2(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result2 = converter2(inputItems);
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

const inputItems2 = { chair: 100, book: 14 };
const result3 = converter3(inputItems2);
console.log(result3);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter4(people) {
  let array = [];

  for (let id in people) {
    array.push({ id: parseInt(id), ...people[id] });
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
const result5 = converter5(inputPeople2);
console.log(result5);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter6(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result6 = converter6(inputStrings);
console.log(result6);
