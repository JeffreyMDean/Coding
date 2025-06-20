// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

function sumOfAllNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

const inputNumbers = [5, 10, 8, 3];
const result = sumOfAllNumbers(inputNumbers);
console.log(result);

// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

function lessThanTwenty(numbers) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 20) {
      newArray.push(numbers[i]);
    }
  }

  return newArray;
}

const inputNumbers2 = [2, 32, 80, 18, 12, 3];
const result2 = lessThanTwenty(inputNumbers2);
console.log(result2);

function lessThanTwenty2(numbers) {
  return numbers.filter((number) => {
    return number < 20;
  });
}

const inputNumbers3 = [2, 32, 80, 18, 12, 3];
const result3 = lessThanTwenty2(inputNumbers3);
console.log(result3);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

function letterW(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "w") {
      newArray.push(strings[i]);
    }
  }

  return newArray;
}
const inputStrings = ["winner", "winner", "chicken", "dinner"];
const result4 = letterW(inputStrings);
console.log(result4);

function letterW2(strings) {
  return strings.filter((string) => {
    return string[0] === "w";
  });
}

const inputStrings2 = ["winner", "winner", "chicken", "dinner"];
const result5 = letterW2(inputStrings2);
console.log(result5);
