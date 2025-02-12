// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  let flatArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flatArray.push(key, value);
  });

  return flatArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result = converter(inputHash);
console.log(result);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter2(books) {
  let hash = {};

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let author = book.author;
    let title = book.title;
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
const result2 = converter2(inputBooks);
console.log(result2);

function converter3(books) {
  let hash = {};

  books.forEach(({ author, title }) => {
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
  });

  return hash;
}

const inputBooks2 = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
const result3 = converter3(inputBooks2);
console.log(result3);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function switcher(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash2 = { a: 1, b: 2, c: 3 };
const result4 = switcher(inputHash2);
console.log(result4);

function switcher2(hash) {
  return Object.entries(hash).reduce((hash, [key, value]) => {
    hash[value] = key;
    return hash;
  }, {});
}

const inputHash3 = { a: 1, b: 2, c: 3 };
const result5 = switcher2(inputHash3);
console.log(result5);
