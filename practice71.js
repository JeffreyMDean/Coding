// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(array) {
  let min = array[0];
  let i = 0;

  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
}

const inputArray = [5, 10, 8, 3, 9];
console.log(minimumNumber(inputArray));

function minimumNumber2(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

const inputArray2 = [5, 10, 8, 3, 9];
console.log(minimumNumber2(inputArray2));

function minimumNumber3(array) {
  let min = array.reduce(function (mi, number) {
    if (number < mi) {
      return number;
    } else {
      return mi;
    }
  }, array[0]);
  return min;
}

const inputArray3 = [5, 10, 8, 3, 9];
console.log(minimumNumber3(inputArray3));

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function modifyLetters(lettersArray) {
  lettersArray[1] = 2;
  return lettersArray;
}

const initialLetters = ["a", "b", "c", "d"];
const modifiedLetters = modifyLetters(initialLetters);
console.log(modifiedLetters.join(" "));


