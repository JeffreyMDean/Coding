// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter(strings) {
  let hash = {};

  for (let string of strings) {
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result = converter(inputStrings);
console.log(result);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

function converter2(books) {
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
const result2 = converter2(inputBooks);
console.log(result2);
