// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.

function largestSum(array) {
  let maxSum = array[0] + array[1];
  let index1 = 0;

  while (index1 < array.length) {
    let index2 = 0;
    while (index2 < array.length) {
      if (index1 !== index2) {
        let sum = array[index1] + array[index2];
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

const inputArray = [1, 8, 3, 10];
console.log(largestSum(inputArray));

