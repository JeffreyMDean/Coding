// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

function maximumNumber(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const inputNumbers = [5, 10, 8, 3];
const result = maximumNumber(inputNumbers);
console.log(result);

function maximumNumber2(numbers) {
  return numbers.reduce((max, number) => {
    if (number > max) {
      return number;
    } else {
      return max;
    }
  }, numbers[0]);
}

const inputNumbers2 = [5, 10, 8, 3];
const result2 = maximumNumber2(inputNumbers2);
console.log(result2);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = converter(inputArray);
console.log(result3);

function converter2(array) {
  return array.reduce((hash, pair) => {
    hash[pair[0]] = pair[1];
    return hash;
  }, {});
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = converter2(inputArray2);
console.log(result4);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter3(items) {
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    hash[items[i].id] = items[i];
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result5 = converter3(inputItems);
console.log(result5);

function converter4(items) {
  return items.reduce((hash, item) => {
    hash[item.id] = item;
    return hash;
  }, {});
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result6 = converter4(inputItems2);
console.log(result6);
