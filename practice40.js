// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

function timesThree() {
  let numbers = [1, 2, 3];
  let newNumbers = [];
  let index = 0;
  while (index < numbers.length) {
    newNumbers.push(numbers[index] * 3);
    index++;
  }
  return newNumbers;
}

const result = timesThree();
console.log(result);

function altTimesThree() {
  let numbers = [1, 2, 3];
  let newNumbers = [];
  numbers.forEach(function (number) {
    newNumbers.push(number * 3);
  });
  return newNumbers;
}

const result1 = altTimesThree();
console.log(result1);

function numberTimesThree() {
  let numbers = [1, 2, 3];
  let newNumbers = numbers.map(function (number) {
    return number * 3;
  });
  return newNumbers;
}

const result2 = numberTimesThree();
console.log(result2);

