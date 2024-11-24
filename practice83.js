// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

function capitalLetters(wordsArray) {
  let newArray = [];
  let i = 0;

  while (i < wordsArray.length) {
    newArray.push(wordsArray[i].toUpperCase());
    i++;
  }
  return newArray;
}

const inputArray = ["hello", "goodbye"];
const result = capitalLetters(inputArray);
console.log(result);

function capitalLetters2(wordsArray) {
  let newArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    newArray.push(wordsArray[i].toUpperCase());
  }
  return newArray;
}

const inputArray2 = ["hello", "goodbye"];
const result2 = capitalLetters(inputArray2);
console.log(result2);

function capitalLetters3(wordsArray) {
  let newArray = wordsArray.map(function (string) {
    return string.toUpperCase();
  });
  return newArray;
}

const inputArray3 = ["hello", "goodbye"];
const result3 = capitalLetters(inputArray3);
console.log(result3);

// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

function numberMultiplier(numbersArray) {
  let i = 0;
  let newArray = [];

  while (i < numbersArray.length) {
    newArray.push(numbersArray[i] * 3);
    i++;
  }
  return newArray;
}

const inputArray4 = [1, 2, 3];
const result4 = numberMultiplier(inputArray4);
console.log(result4);

function numberMultiplier2(numbersArray) {
  let newArray = [];

  numbersArray.forEach(function (number) {
    newArray.push(number * 3);
  });
  return newArray;
}

const inputArray5 = [1, 2, 3];
const result5 = numberMultiplier(inputArray5);
console.log(result5);

function numberMultiplier3(numbersArray) {
  let newArray = numbersArray.map(function (number) {
    return number * 3;
  });
  return newArray;
}

const inputArray6 = [1, 2, 3];
const result6 = numberMultiplier(inputArray6);
console.log(result6);

