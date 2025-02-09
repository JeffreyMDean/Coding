// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter(books) {
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
const result = converter(inputBooks);
console.log(result);

function converter2(books) {
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
const result2 = converter2(inputBooks2);
console.log(result2);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

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
  return Object.entries(hash).reduce((flat, [key, value]) => {
    flat.push(key, value);
    return flat;
  }, []);
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result4 = converter4(inputHash2);
console.log(result4);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

function switcher(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash3 = { a: 1, b: 2, c: 3 };
const result5 = switcher(inputHash3);
console.log(result5);
