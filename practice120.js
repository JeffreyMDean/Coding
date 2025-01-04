// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

function letterW(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "w") {
      newArray.push(strings[i]);
    }
  }

  return newArray;
}

const inputStrings = ["winner", "winner", "chicken", "dinner"];
const result = letterW(inputStrings);
console.log(result);

function letterW2(strings) {
  return strings.filter(function (string) {
    return string[0] === "w";
  });
}

const inputStrings2 = ["winner", "winner", "chicken", "dinner"];
const result2 = letterW2(inputStrings2);
console.log(result2);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

function greaterThanFive(items) {
  return items.filter((item) => {
    return item.price > 5;
  });
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result3 = greaterThanFive(inputItems);
console.log(result3);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

function evenNumbers(array) {
  return array.filter((number) => {
    return number % 2 === 0;
  });
}

const inputArray = [2, 4, 5, 1, 8, 9, 7];
const result4 = evenNumbers(inputArray);
console.log(result4);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterCounter(string) {
  let hash = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    i++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result5 = letterCounter(inputString);
console.log(result5);

function letterCounter2(string) {
  let hash = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString2 = "bookkeeper";
const result6 = letterCounter2(inputString2);
console.log(result6);

function letterCounter3(string) {
  return string.split("").reduce(function (hash, letter) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    return hash;
  }, {});
}

const inputString3 = "bookkeeper";
const result7 = letterCounter3(inputString3);
console.log(result7);
