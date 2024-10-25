// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(array) {
  let minNum = array[0];
  let i = 0;

  while (i < array.length) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
    i++;
  }
  return minNum;
}

const inputArray = [5, 10, 8, 3, 9];
console.log(minimumNumber(inputArray));

function minimumNumber2(array) {
  let minNum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return minNum;
}

const inputArray2 = [5, 10, 8, 3, 9];
console.log(minimumNumber2(inputArray2));

function minimumNumber3(array) {
  let minNum = array.reduce(function (min, number) {
    if (number < min) {
      return number;
    } else {
      return min;
    }
  }, array[0]);
  return minNum;
}

const inputArray3 = [5, 10, 8, 3, 9];
console.log(minimumNumber3(inputArray3));

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

function lengthOfStrings(strings) {
  let length = 0;
  let i = 0;

  while (i < strings.length) {
    length = length + strings[i].length;
    i++;
  }
  return length;
}

const inputStrings = ["volleyball", "basketball", "badminton"];
console.log(lengthOfStrings(inputStrings));

function lengthOfStrings2(strings) {
  let length = 0;

  for (let i = 0; i < strings.length; i++) {
    length = length + strings[i].length;
  }
  return length;
}

const inputStrings2 = ["volleyball", "basketball", "badminton"];
console.log(lengthOfStrings2(inputStrings2));

function lengthOfStrings3(strings) {
  let totalLength = strings.reduce(function (length, string) {
    return length + string.length;
  }, 0);
  return totalLength;
}


const inputStrings3 = ["volleyball", "basketball", "badminton"];
console.log(lengthOfStrings3(inputStrings3));