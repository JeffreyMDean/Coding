// Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

function printer(num1, num2) {
  if (num1 > 10 || num2 > 10) {
    return 100;
  } else {
    return -100;
  }
}

const inputNumber1 = 11;
const inputNumber2 = 12;
const result = printer(inputNumber1, inputNumber2);
console.log(result);

// Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

function pricesLessThanTen(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].price < 10) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const inputArray = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result2 = pricesLessThanTen(inputArray);
console.log(result2);

function pricesLessThanTen2(array) {
  return array.filter(function (item) {
    return item.price < 10;
  });
}

const inputArray2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result3 = pricesLessThanTen2(inputArray2);
console.log(result3);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(pairs) {
  let i = 0;
  let pairsObject = {};

  while (i < pairs.length) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]];
const result4 = converter(inputPairs);
console.log(result4);

function converter2(pairs) {
  let pairsObject = {};

  pairs.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputPairs2 = [[1, 3], [8, 9], [2, 16]];
const result5 = converter(inputPairs2);
console.log(result5);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(array) {
  let i = 0;
  let pairsObject = {};

  while (i < array.length) {
    let key = array[i].id;
    let value = array[i];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray3 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result6 = hashConverter(inputArray3);
console.log(result6);

function hashConverter2(array) {
  return array.reduce((result, item) => {
    return result[item.id] = item;
  }, {});
}

const inputArray4 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result7 = hashConverter(inputArray4);
console.log(result7);
