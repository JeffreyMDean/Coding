// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
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
const result = converter(inputPeople);
console.log(result);

function converter2(people) {
  return Object.entries(people).map(([id, info]) => ({
    id: parseInt(id),
    ...info,
  }));
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople2);
console.log(result2);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter3(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result3 = converter3(inputHash);
console.log(result3);

function converter4(hash) {
  let flattenedArray = [];
  let keys = Object.keys(hash);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    flattenedArray.push(key, hash[key]);
  }

  return flattenedArray;
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result4 = converter4(inputHash2);
console.log(result4);

function converter5(hash) {
  let flattenedArray = [];

  for (let key in hash) {
    flattenedArray.push(key, hash[key]);
  }

  return flattenedArray;
}

const inputHash3 = { a: 1, b: 2, c: 3, d: 4 };
const result5 = converter5(inputHash3);
console.log(result5);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

function converter6(books) {
  let hash = {};

  for (let i = 0; i < books.length; i++) {
    let author = books[i].author;
    let title = books[i].title;
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
  }

  return hash;
}

const inputBooks = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
const result6 = converter6(inputBooks);
console.log(result6);
