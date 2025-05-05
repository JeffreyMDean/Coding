function fibonacciGenerator(inputNumber) {
  let output = [];

  if (inputNumber === 1) {
    output = [0];
  } else if (inputNumber === 2) {
    output = [0, 1];
  } else {
    output.push(0, 1);
    for (let i = 2; i < inputNumber; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
  }

  return output;
}

const inputNumber = 7;
const result = fibonacciGenerator(inputNumber);
console.log(result);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(numbers) {
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

const inputNumbers = [5, 10, 8, 3, 9];
const result2 = minimumNumber(inputNumbers);
console.log(result2);
