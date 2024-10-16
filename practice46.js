// Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

function stringConverter() {
  let numbers = [1, 2, 3];
  let newArray = [];
  let index = 0;

  while (index < numbers.length) {
    newArray.push(numbers[index].toString());
    index++;
  }
  return newArray;
}

const result = stringConverter();
console.log(result);

function stringConverter2() {
  let numbers = [1, 2, 3];
  let newArray = [];
  
  numbers.forEach(function (number) {
    newArray.push(number.toString());
  });
  return newArray;
}

console.log(stringConverter2());

function stringConverter3() {
  let numbers = [1, 2, 3];
  let newArray = numbers.map(function (number) {
    return number.toString(); // converts the current number to a string
  });
  return newArray;
}

console.log(stringConverter3());

// map function collects these returned values and constructs a new array from them


// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

function lessThanTwenty() {
  let numbers = [2, 32, 80, 18, 12, 3];
  let newNumbers = [];
  let index = 0;

  while (index < numbers.length) {
    if (numbers[index] < 20) {
      newNumbers.push(numbers[index]);
    }
    index++;
  }
  return newNumbers;
}

console.log(lessThanTwenty());

function lessThanTwenty2() {
  let numbers = [2, 32, 80, 18, 12, 3];
  let newNumbers = [];

  numbers.forEach(function (number) {
    if (number < 20) {
      newNumbers.push(number);
    }
  });
  return newNumbers;
}

console.log(lessThanTwenty2());

function lessThanTwenty3() {
  let numbers = [2, 32, 80, 18, 12, 3];
  let newNumbers = numbers.filter(function (number) {
    return number < 20;
  });
  return newNumbers;
}

console.log(lessThanTwenty3());