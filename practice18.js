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

let numberPairs = [[1, 3], [8, 9], [2, 16]];
console.log(sumOfAllNumbers(numberPairs));

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

function combinationSum(numbers1, numbers2) {
  let eachCombination = [];
  let index1 = 0;
  while (index1 < numbers1.length) {
    let index2 = 0;
    while (index2 < numbers2.length) {
      eachCombination.push(numbers1[index1] + numbers2[index2]);
      index2++;
    }
    index1++;
  }
  return (eachCombination);
}

let numbers1 = [1, 2];
let numbers2 = [6, 7, 8];
console.log(combinationSum(numbers1, numbers2));