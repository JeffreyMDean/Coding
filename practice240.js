// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

function largestProduct(numbers) {
  let maxProduct = numbers[0] * numbers[1];
  let index1 = 0;

  while (index1 < numbers.length) {
    let number = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNumber = numbers[index2];
        let product = number * otherNumber;
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
      index2++;
    }
    index1++;
  }
  return maxProduct;
}

const inputNumbers = [5, -2, 1, -9, -7, 2, 6];
const result = largestProduct(inputNumbers);
console.log(result);

// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

function converter2(numberPairs) {
  let flattenedArray = [];
  let index1 = 0;

  while (index1 < numberPairs.length) {
    let numberPair = numberPairs[index1];
    let index2 = 0;
    while (index2 < numberPair.length) {
      let number = numberPair[index2];
      flattenedArray.push(number);
      index2++;
    }
    index1++;
  }

  return flattenedArray;
}

const inputNumberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter2(inputNumberPairs);
console.log(result2);
