// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

function maximumNumber(array) {
  let max = array[0];
  let i = 0;

  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    }
    i++;
  }
  return max;
}

const inputArray =  [5, 10, 8, 3];
const result = maximumNumber(inputArray);
console.log(result);

function maximumNumber2(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const inputArray2 =  [5, 10, 8, 3];
console.log(maximumNumber2(inputArray2));

function maximumNumber3(array) {
  let maximum = array.reduce(function (max, number) {
    if (number > max) {
      return number;
    } else {
      return max;
    }
  }, array[0]);
  return maximum;
}

const inputArray3 = [5, 10, 8, 3];
console.log(maximumNumber3(inputArray3));

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;
  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray4 = [1, 4, 9, 10, 20];
const result2 = numberPrinter(inputArray4);
console.log(result2);