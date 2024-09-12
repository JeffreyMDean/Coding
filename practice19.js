// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

function combinationOfProducts(numbers) {
  let everyCombination = [];
  let index1 = 0;
  while (index1 < numbers.length) {
    let index2 = 0;
    while (index2 < numbers.length) {
      everyCombination.push(numbers[index1] * numbers[index2]);
      index2++;
    }
    index1++;
  }
  return everyCombination;
}

const numbers = [2, 8, 3];
console.log(combinationOfProducts(numbers));

// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.

function largestSum(nums) {
  maxSum = nums[0] * nums[1];
  let index1 = 0;
  while (index1 < nums.length) {
    let index2 = 0;
    while (index2 < nums.length) {
      if (index1 !== index2) {
        sum = nums[index1] + nums[index2];
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
      index2++;
    }
    index1++;
  }
  return maxSum;
}

const nums = [1, 8, 3, 10];
console.log(largestSum(nums));