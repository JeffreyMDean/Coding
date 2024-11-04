// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

function largestProduct(array) {
  let largest = array[0] * array[1];
  let index1 = 0;

  while (index1 < array.length) {
    let currentNumber = array[index1];
    let index2 = 0;
    while (index2 < array.length) {
      if (index1 !== index2) {
        let otherNumber = array[index2];
        let product = currentNumber * otherNumber;
        if (product > largest) {
          largest = product;
        }
      }
      index2++;
    }
    index1++;
  }
  return largest;
}

const inputArray = [5, -2, 1, -9, -7, 2, 6];
console.log(largestProduct(inputArray));

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

function sumOfAllNumbers(array) {
  let sum = 0;
  let index1 = 0;

  while (index1 < array.length) {
    let numberPair = numberPairs[index1]; // first iteration
    let index2 = 0; // inner loop starts with index2 = 0
    while (index2 < numberPair.length) { // inner loop
      let number = numberPair[index2];
      sum = sum + number;
      index2++;
    }
    index1++;
  }
  return sum;
}

const numberPairs = [[1, 3], [8, 9], [2, 16]];
console.log(sumOfAllNumbers(numberPairs));

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

function sumOfCombinations(nums1, nums2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < nums1.length) {
    let index2 = 0;
    while (index2 < nums2.length) {
      newArray.push(nums1[index1] + nums2[index2]);
      index2++;
    }
    index1++;
  }
  return newArray;
}

const inputNumbers = [1, 2];
const inputNumbers2 = [6, 7, 8];
console.log(sumOfCombinations(inputNumbers, inputNumbers2));