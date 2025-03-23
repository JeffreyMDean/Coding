// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

function sumOfAllNums(nums) {
  return nums.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

const inputNumbers = [5, 10, 8, 3];
const result = sumOfAllNums(inputNumbers);
console.log(result);

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

function lowestPrice(items) {
  return items.reduce((low, item) => {
    if (item.price < low.price) {
      return item;
    } else {
      return low;
    }
  }, items[0]);
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = lowestPrice(inputItems);
console.log(result2);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter(array) {
  return array.reduce((hash, pair) => {
    let [key, value] = pair;
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = converter(inputArray);
console.log(result3);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b": 1, "o": 2, "k": 2, "e": 3, "p": 1, "r": 1}.

function converter2(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result4 = converter2(inputString);
console.log(result4);

function converter3(string) {
  return string.split("").reduce((hash, letter) => {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    return hash;
  }, {});
}

const inputString2 = "bookkeeper";
const result5 = converter3(inputString2);
console.log(result5);
