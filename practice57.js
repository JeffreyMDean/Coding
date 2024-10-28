// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

function product(array) {
  let prod = 1;
  let i = 0;

  while (i < array.length) {
    prod = prod * array[i];
    i++;
  }
  return prod;
}

const inputArray = [5, 10, 8, 3];
console.log(product(inputArray));

function product2(array) {
  let prod = 1;

  for (let i = 0; i < array.length; i++) {
    prod = prod * array[i];
  }
  return prod;
}

const inputArray2 = [5, 10, 8, 3];
console.log(product2(inputArray2));

function product3(array) {
  let prod = array.reduce(function (prod, number) {
    return prod * number;
  }, 1);
  return prod;
}

const inputArray3 = [5, 10, 8, 3];
console.log(product3(inputArray3));





