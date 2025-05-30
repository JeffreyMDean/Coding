// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

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

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

function converter3(hash) {
  let newHash = {};

  Object.entries(hash).forEach(([key, value]) => {
    newHash[value] = key;
  });

  return newHash;
}

const inputHash = { a: 1, b: 2, c: 3 };
const result3 = converter3(inputHash);
console.log(result3);

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(20, 90);
console.log(rectangle);
console.log(rectangle.area());
