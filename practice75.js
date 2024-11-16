// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

function numbersLessThan20(numbersArray) {
  let newArray = [];
  let i = 0;

  while (i < numbersArray.length) {
    if (numbersArray[i] < 20) {
      newArray.push(numbersArray[i]);
    }
    i++;
  }
  return newArray;
}

const inputArray = [2, 32, 80, 18, 12, 3];
console.log(numbersLessThan20(inputArray));

function numbersLessThann20(numbersArray) {
  let newArray = [];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < 20) {
      newArray.push(numbersArray[i]);
    }
  }
  return newArray;
}

const inputArray2 = [2, 32, 80, 18, 12, 3];
const result = numbersLessThann20(inputArray2);
console.log(result);

function numbersLessThannn20(numbersArray) {
  let newArray = numbersArray.filter(function (number) {
    return number < 20;
  });
  return newArray;
}

const inputArray3 = [2, 32, 80, 18, 12, 3];
console.log(numbersLessThannn20(inputArray3));