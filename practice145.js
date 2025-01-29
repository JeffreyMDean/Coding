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

function converter2(string) {
  let hash = {};
  let newString = string.split("");

  for (let i = 0; i < newString.length; i++) {
    if (hash[newString[i]] === undefined) {
      hash[newString[i]] = 0;
    }
    hash[newString[i]]++;
  }

  return hash;
}

const inputString2 = "bookkeeper";
const result2 = converter2(inputString2);
console.log(result2);

function converter3(string) {
  return string.split("").reduce((hash, string) => {
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
    return hash;
  }, {});
}

const inputString3 = "bookkeeper";
const result3 = converter3(inputString3);
console.log(result3);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter4(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result4 = converter4(inputHash);
console.log(result4);

function converter5(hash) {
  return Object.entries(hash).reduce((flat, [key, value]) => {
    flat.push(key, value);
    return flat;
  }, []);
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result5 = converter5(inputHash2);
console.log(result5);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter6(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result6 = converter6(inputPeople);
console.log(result6);

function converter7(people) {
  let array = [];

  for (let id in people) {
    array.push({ id: parseInt(id), ...people[id] });
  }

  return array;
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result7 = converter7(inputPeople2);
console.log(result7);
