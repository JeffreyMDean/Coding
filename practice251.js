// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

function evenNumbers(numbers) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i]);
    }
  }

  return newArray;
}

const inputNumbers = [2, 4, 5, 1, 8, 9, 7];
const result = evenNumbers(inputNumbers);
console.log(result);

function evenNumbers2(numbers) {
  return numbers.filter((number) => {
    return number % 2 === 0;
  });
}

const inputNumbers2 = [2, 4, 5, 1, 8, 9, 7];
const result2 = evenNumbers2(inputNumbers2);
console.log(result2);

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

function noLetterB(strings) {
  return strings.filter(function (string) {
    return string[0] !== "b";
  });
}

const inputStrings = ["big", "little", "good", "bad"];
const result3 = noLetterB(inputStrings);
console.log(result3);

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
const result4 = converter(inputBooks);
console.log(result4);
