// Start with an array of numbers and compute the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(numbers) {
  let min = numbers[0];
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }

  return min;
}

const inputNumbers = [5, 10, 8, 3, 9];
const result = minimumNumber(inputNumbers);
console.log(result);

function minimumNumber2(numbers) {
  let min = numbers[0];

  numbers.forEach(function (number) {
    if (number < min) {
      min = number;
    }
  });

  return min;
}

const inputNumbers2 = [5, 10, 8, 3, 9];
const result2 = minimumNumber2(inputNumbers2);
console.log(result2);

function minimumNumber3(numbers) {
  return numbers.reduce(function (min, number) {
    if (number < min) {
      return number;
    } else {
      return min;
    }
  }, numbers[0]);
}

const inputNumbers3 = [5, 10, 8, 3, 9];
const result3 = minimumNumber3(inputNumbers3);
console.log(result3);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(items) {
  let hash = {};
  let i = 0;

  while (i < items.length) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result4 = converter(inputItems);
console.log(result4);

function converter2(items) {
  return items.reduce((hash, item) => {
    hash[item.id] = item;
    return hash;
  }, {});
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result5 = converter2(inputItems2);
console.log(result5);

function converter3(items) {
  let hash = {};

  items.forEach(function (item) {
    let key = item.id;
    let value = item;
    hash[key] = value;
  }, {});

  return hash;
}

const inputItems3 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result6 = converter3(inputItems3);
console.log(result6);
