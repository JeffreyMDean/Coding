// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

function numberPrinter(number) {
  if (number < 10) {
    return 9;
  } else if (number < 20) {
    return 19;
  } else if (number < 30) {
    return 29;
  } else {
    return -1;
  }
}

const inputNumber = 2;
const result = numberPrinter(inputNumber);
console.log(result);

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

function numberPrinter2(number) {
  while (number <= 100) {
    console.log(number);
    number++;
  }
}

const inputNumber2 = 0;
const result2 = numberPrinter2(inputNumber2);
console.log(result2);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(array) {
  let i = 0;
  let itemsObject = {};

  while (i < array.length) {
    itemsObject[array[i].id] = array[i];
    i++;
  }

  return itemsObject;
}

const inputArray = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result3 = hashConverter(inputArray);
console.log(result3);

function hashConverter2(array) {
  let result = array.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {});

  return result;
}

const inputArray2 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result4 = hashConverter2(inputArray2);
console.log(result4);

function hashConverter3(array) {
  return array.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {});
}

const inputArray3 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result5 = hashConverter2(inputArray3);
console.log(result5);