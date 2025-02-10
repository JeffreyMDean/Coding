// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter(books) {
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
const result = converter(inputBooks);
console.log(result);

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function switched(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash = { a: 1, b: 2, c: 3 };
const result2 = switched(inputHash);
console.log(result2);

function switched2(hash) {
  return Object.entries(hash).reduce((newObj, [key, value]) => {
    newObj[value] = key;
    return newObj;
  }, {});
}

const inputHash2 = { a: 1, b: 2, c: 3 };
const result3 = switched2(inputHash2);
console.log(result3);
