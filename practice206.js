// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

function everyCombo(string) {
  let newArray = [];
  let index1 = 0;

  while (index1 < string.length) {
    let index2 = 0;
    while (index2 < string.length) {
      if (index1 !== index2) {
        newArray.push(string[index1] + string[index2]);
      }
      index2++;
    }
    index1++;
  }
  return newArray;
}

const inputString = ["a", "b", "c", "d"];
const result = everyCombo(inputString);
console.log(result);

// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

function largestProduct(numbers) {
  let largestProd = numbers[0] * numbers[1];
  let index1 = 0;

  while (index1 < numbers.length) {
    let number = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNumber = numbers[index2];
        let product = number * otherNumber;
        if (product > largestProd) {
          largestProd = product;
        }
      }
      index2++;
    }
    index1++;
  }
  return largestProd;
}

const inputNumbers = [5, -2, 1, -9, -7, 2, 6];
const result2 = largestProduct(inputNumbers);
console.log(result2);

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

function sumOfAllNumbers(numberPairs) {
  let sum = 0;
  let index1 = 0;

  while (index1 < numberPairs.length) {
    let numberPair = numberPairs[index1];
    let index2 = 0;
    while (index2 < numberPair.length) {
      let number = numberPair[index2];
      sum = sum + number;
      index2++;
    }
    index1++;
  }

  return sum;
}

const numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = sumOfAllNumbers(numberPairs);
console.log(result3);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

function combos(numbers1, numbers2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < numbers1.length) {
    let num = numbers1[index1];
    let index2 = 0;
    while (index2 < numbers2.length) {
      let otherNum = numbers2[index2];
      newArray.push(num + otherNum);
      index2++;
    }
    index1++;
  }
  return newArray;
}

const inputNumbers1 = [1, 2];
const inputNumebrs2 = [6, 7, 8];
const result4 = combos(inputNumbers1, inputNumebrs2);
console.log(result4);
