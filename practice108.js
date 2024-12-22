// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

function sum(items) {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

const inputItems = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result = sum(inputItems);
console.log(result);

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(words, word1, word2) {
  words.push(word1, word2);
  return words;
}

const inputWords = ["hi", "hello", "bye"];
const result2 = wordAdder(inputWords, "run", "walk");
console.log(result2);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  array.forEach(pair => {
    const [key, value] = pair;
    hash[key] = value;
  });

  return hash;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
const result3 = converter(inputArray);
console.log(result3);

function converter2(array) {
  return array.reduce((hash, pair) => {
    hash[pair][0] = pair[1];
    return hash;
  }, {});
}

const inputArray2 = [[1, 3], [8, 9], [2, 16]];
const result4 = converter(inputArray2);
console.log(result4);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(items) {
  let hash = {};

  items.forEach(item => {
    hash[item.id] = item;
  });

  return hash;
}

const inputItems2 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result5 = hashConverter(inputItems2);
console.log(result5);

function hashConverter2(items) {
  return items.reduce((hash, item) => {
    return hash[item.id] = item;
  });
}

const inputItems3 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result6 = hashConverter(inputItems3);
console.log(result6);
