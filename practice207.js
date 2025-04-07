// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

function productCombos(numbers) {
  let newArray = [];
  let index1 = 0;

  while (index1 < numbers.length) {
    let num = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      let otherNum = numbers[index2];
      newArray.push(num * otherNum);
      index2++;
    }
    index1++;
  }

  return newArray;
}

const inputNumbers = [2, 8, 3];
const result = productCombos(inputNumbers);
console.log(result);

// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.

function largestSum(numbers) {
  let maxSum = numbers[0] + numbers[1];
  let index1 = 0;

  while (index1 < numbers.length) {
    let num = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNum = numbers[index2];
        let sum = num + otherNum;
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

const inputNumbers2 = [1, 8, 3, 10];
const result2 = largestSum(inputNumbers2);
console.log(result2);

// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

function addUpToTen(numbers) {
  let newArray = [];
  let index1 = 0;
  let result = false;

  while (index1 < numbers.length) {
    let num = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNum = numbers[index2];
        if (num + otherNum === 10 && result === false) {
          result = [num, otherNum]; // && result === false ensures once you have a result you stop updating it
        }
      }
      index2++;
    }
    index1++;
  }
  return result;
}

const inputNumbers3 = [2, 5, 3, 1, 0, 7, 11];
const result3 = addUpToTen(inputNumbers3);
console.log(result3);

// if result not initally set to false you would be able to overwrite it, this way you ensure you only set result once when you find a valid pair of numbers
