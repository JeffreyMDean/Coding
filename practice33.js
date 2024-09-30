// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:
//   If the total order value is less than $50, there is no discount.
//   If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
//   If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

function discountCalculator(orderValue, membershipLevel) {
  let discount = 0;

  if (orderValue < 50) {
    discount = 0;
  } else if (orderValue >= 50 && orderValue <= 100) {
    if (membershipLevel === "regular") {
      discount = orderValue * .05;
    } else if (membershipLevel === "premium") {
      discount = orderValue * .1;
    }
  } else {
    if (orderValue > 100) {
      if (membershipLevel === "regular") {
        discount = orderValue * .1;
      } else if (membershipLevel === "premium") {
        discount = orderValue * .15;
      }
    }
  }
  return discount;
}

const orderValue = 75;
const membershipLevel = "regular";
const discount = discountCalculator(orderValue, membershipLevel);
console.log(`Your discount is $${discount}`);

