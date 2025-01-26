// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

function maximumNumber(numbers) {
  return numbers.reduce((max, number) => {
    if (number > max) {
      return number;
    } else {
      return max;
    }
  }, numbers[0]);
}

const inputNumbers = [5, 10, 8, 3];
const result = maximumNumber(inputNumbers);
console.log(result);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function changer(letters) {
  letters[1] = 5;
  return letters;
}

const inputLetters = ["o", "r", "q", "b"];
const result2 = changer(inputLetters);
console.log(result2);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(items) {
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i]["id"];
    let value = items[i];
    hash[key] = value;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result3 = converter(inputItems);
console.log(result3);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function converter2(string) {
  return string.split("").reduce((hash, letter) => {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    return hash;
  }, {});
}

const inputString = "bookkeeper";
const result4 = converter2(inputString);
console.log(result4);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter3(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key);
    flattenedArray.push(value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result5 = converter3(inputHash);
console.log(result5);
