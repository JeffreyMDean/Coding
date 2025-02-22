// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(items) {
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result = converter(inputItems);
console.log(result);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(people) {
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
const result2 = converter2(inputPeople);
console.log(result2);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do": 2, "or": 1, "not": 1}.

function converter3(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    let key = strings[i];
    if (hash[key] === undefined) {
      hash[key] = 0;
    }
    hash[key]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result3 = converter3(inputStrings);
console.log(result3);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter4(hash) {
  let flattenedArray = [];

  for (let key in hash) {
    flattenedArray.push(key, hash[key]);
  }

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result4 = converter4(inputHash);
console.log(result4);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter5(books) {
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
const result5 = converter5(inputBooks);
console.log(result5);

function converter6(books) {
  return books.reduce((hash, book) => {
    let author = book.author;
    let title = book.title;
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
    return hash;
  }, {});
}

const inputBooks2 = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
const result6 = converter6(inputBooks2);
console.log(result6);
