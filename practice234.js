// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function combine(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = combine(inputStrings);
console.log(result);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

function sumOfPrices(items) {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = sumOfPrices(inputItems);
console.log(result2);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = "o";
  return letters;
}

const inputLetters = ["a", "x", "w", "k"];
const result3 = letterChanger(inputLetters);
console.log(result3);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbers) {
  let i = 0;

  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

const inputNumbers = [1, 2, 3, 4, 5];
const result4 = numberPrinter(inputNumbers);
console.log(result4);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter(pairs) {
  let hash = {};

  for (let i = 0; i < pairs.length; i++) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result5 = converter(inputPairs);
console.log(result5);

function converter2(pairs) {
  return pairs.reduce((hash, pair) => {
    const [key, value] = pair;
    hash[key] = value;
    return hash;
  }, {});
}

const inputPairs2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result6 = converter2(inputPairs2);
console.log(result6);

function converter3(pairs) {
  return pairs.reduce((hash, pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
    return hash;
  }, {});
}

const inputPairs3 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result7 = converter3(inputPairs3);
console.log(result7);
