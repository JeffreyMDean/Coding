// Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

function allCaps(word1, word2) {
  return word1.toUpperCase() + " " + word2.toUpperCase();
}

const inputWord1 = "table";
const inputWord2 = "chair";
const result = allCaps(inputWord1, inputWord2);
console.log(result);

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

const inputOrderValue = 75;
const inputMembershipLevel = "regular";
const result2 = discountCalculator(inputOrderValue, inputMembershipLevel);
console.log(result2);
