// Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

function integer(num) {
  return parseInt(num);
}

const inputNumber = 3.2;
const result = integer(inputNumber);
console.log(result);

// Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

function numberMultiplier(num1, num2) {
  return num1 * num2;
}

const inputNumber1 = 2;
const inputNumber2 = 5;
const result2 = numberMultiplier(inputNumber1, inputNumber2);
console.log(result2);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

function greaterThanFive(hashes) {
  let i = 0;
  let newArray = [];
  while (i < hashes.length) {
    if (hashes[i].price > 5) {
      newArray.push(hashes[i]);
    }
    i++;
  }
  return newArray;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result3 = greaterThanFive(inputHashes);
console.log(result3);

function greaterThanFive2(hashes) {
  let newArray = [];
  hashes.forEach(function (hash) {
    if (hash.price > 5) {
      newArray.push(hash);
    }
  });
  return newArray;
}

const inputHashes2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result4 = greaterThanFive(inputHashes);
console.log(result4);

function greaterThanFive3(hashes) {
  let newArray = hashes.filter(function (hash) {
    return hash.price > 5;
  });
  return newArray;
}

const inputHashes3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result5 = greaterThanFive(inputHashes);
console.log(result5);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;

  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray7 = [1, 2, 3, 2, 1];
const result6 = numberPrinter(inputArray7);
console.log(result6);