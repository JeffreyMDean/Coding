// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

function printer(number) {
  if (number < 10) {
    return -1;
  } else if (number > 10) {
    return 1;
  } else {
    return 10;
  }
}

const inputNumber = 5;
const result = printer(inputNumber);
console.log(result);

// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

function timesThree(numbers) {
  let newNumbers = [];

  numbers.forEach(function (number) {
    newNumbers.push(number * 3);
  });

  return newNumbers;
}

const inputNumbers = [1, 2, 3];
const result2 = timesThree(inputNumbers);
console.log(result2);

function timesThree2(numbers) {
  let newNumbers = numbers.map(function (number) {
    return number * 3;
  });

  return newNumbers;
}

const inputNumbers2 = [1, 2, 3];
const result3 = timesThree(inputNumbers2);
console.log(result3);

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(number, num1, num2, num3) {
  number.push(num1, num2, num3);
  
  return number;
}

const inputNumber2 = [8];
const result4 = numberAdder(inputNumber2, 4, 5, 2);
console.log(result4);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let i = 0;
  let pairsObject = {};

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
const result5 = converter(inputArray);
console.log(result5);

function converter2(array) {
  let pairsObject = {};

  array.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputArray2 = [[1, 3], [8, 9], [2, 16]];
const result6 = converter2(inputArray2);
console.log(result6);