// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

function sum(array) {
  let sum = 0;
  let index = 0;

  while (index < array.length) {
    sum = sum + array[index];
    index++;
  }
  return sum;
}

const inputArray = [5, 10, 8, 3];
console.log(sum(inputArray));

function sum2(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

const inputArray2 = [5, 10, 8, 3];
console.log(sum2(inputArray2));

function sum3(array) {
  let sum = array.reduce(function (sum, number) {
    return sum + number;
  }, 0);
  return sum;
}

const inputArray3 = [5, 10, 8, 3];
console.log(sum3(inputArray3));
