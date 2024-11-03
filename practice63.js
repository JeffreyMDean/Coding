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