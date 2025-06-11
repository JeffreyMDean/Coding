// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

function maximumNumber(numbers) {
  return numbers.reduce((max, number) => {
    if (number > max) {
      return number;
    } else {
      return max;
    }
  }, numbers[0]);
}

const inputNumbers = [5, 10, 8, 3];
const result = maximumNumber(inputNumbers);
console.log(result);

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

function sumOfAllNums(pairs) {
  let sum = 0;
  let index1 = 0;

  while (index1 < pairs.length) {
    let pair = pairs[index1];
    let index2 = 0;
    while (index2 < pair.length) {
      let number = pair[index2];
      sum = sum + number;
      index2++;
    }
    index1++;
  }
  return sum;
}

const inputPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = sumOfAllNums(inputPairs);
console.log(result2);

// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

function discountCalculator(orderValue, membershipLevel) {
  if (orderValue < 50) {
    return 0;
  } else if (orderValue >= 50 && orderValue <= 100) {
    if (membershipLevel === "regular") {
      return orderValue * 0.05;
    } else if (membershipLevel === "premium") {
      return orderValue * 0.1;
    }
  } else {
    if (membershipLevel === "regular") {
      return orderValue * 0.1;
    } else if (membershipLevel === "premium") {
      return orderValue * 0.15;
    }
  }
}

const orderValue = 75;
const membershipLevel = "regular";
const result3 = discountCalculator(orderValue, membershipLevel);
console.log(result3);
