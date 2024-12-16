// Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

function printer(num1, num2) {
  if (num1 < 10 && num2 < 10) {
    return 1;
  } else {
    return 0;
  }
}

const inputNumber1 = 2;
const inputNumber2 = 4;
const result = printer(inputNumber1, inputNumber2);
console.log(result);

// Write a while loop to print the numbers 1 through 10.

function printNumbers() {
  let count = 1;

  while (count <= 10) {
    console.log(count);
    count++;
  }
}

printNumbers();

// Write a while loop that prints the word "hello" 5 times.

function greeting() {
  let count = 0;

  while (count < 5) {
    console.log("hello");
    count++;
  }
}

greeting();

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"]

function capLetters(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }

  return newArray;
}

const inputArray = ["hello", "goodbye"];
const result2 = capLetters(inputArray);
console.log(result2);

function capLetters2(array) {
  let newArray = array.map(function (string) {
    return string.toUpperCase();
  });

  return newArray;
}

const inputArray2 = ["hello", "goodbye"];
const result3 = capLetters(inputArray2);
console.log(result3);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(pairs) {
  let pairsObject = {};

  pairs.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]];
const result4 = converter(inputPairs);
console.log(result4);