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

// Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// If the destination is domestic:
// If the weight is less than or equal to 1 kg, the shipping fee is $5.
// If the weight is greater than 1 kg, the shipping fee is $10.
// If the destination is an international shipment:
// If the weight is less than or equal to 1 kg, the shipping fee is $15.
// If the weight is greater than 1 kg, the shipping fee is $25.

function shippingCalculator(packageWeight, destination) {
  let shippingFee = 0;

  if (destination === "domestic") {
    if (packageWeight <= 1) {
      shippingFee = 5;
    } else {
      shippingFee = 10;
    }
  } else if (destination === "international") {
    if (packageWeight <= 1) {
      shippingFee = 15;
    } else {
      shippingFee = 25;
    }
  }
  return shippingFee;
}

const packageWeight = 2;
const destination = "international";
const shippingFee = shippingCalculator(packageWeight, destination);
console.log(`Your shipping fee is $${shippingFee}`);