// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

function test(numbers) {
  let largestProduct = numbers[0] * numbers[1];
  let index1 = 0;
  while (index1 < numbers.length) {
    let currentNumber = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNumber = numbers[index2];
        let product = currentNumber * otherNumber;
        if (product > largestProduct) {
          largestProduct = product;
        }
      }
      index2++;
    }
    index1++;
  }
  return largestProduct;
}

let numbers = [5, -2, 1, -9, -7, 2, 6];
console.log(test(numbers));

