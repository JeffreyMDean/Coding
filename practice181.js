// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(numbers) {
  return numbers.reduce((min, number) => {
    if (number < min) {
      return number;
    } else {
      return min;
    }
  }, numbers[0]);
}

const inputNumbers = [5, 10, 8, 3, 9];
const result = minimumNumber(inputNumbers);
console.log(result);

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(items) {
  return items.reduce((short, item) => {
    if (item.name.length < short.name.length) {
      return item;
    } else {
      return short;
    }
  }, items[0]);
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = shortestName(inputItems);
console.log(result2);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

function converter(books) {
  let hash = {};

  for (let book of books) {
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
const result3 = converter(inputBooks);
console.log(result3);
