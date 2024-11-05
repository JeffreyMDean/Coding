// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

function everyCombinationOfProducts(array) {
  let products = [];
  let index1 = 0;

  while (index1 < array.length) {
    let index2 = 0;
    while (index2 < array.length) {
      products.push(array[index1] * array[index2]);
      index2++;
    }
    index1++;
  }
  return products;
}

const inputArray = [2, 8, 3];
console.log(everyCombinationOfProducts(inputArray));