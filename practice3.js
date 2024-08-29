// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var sumOfPrices = 0;
var index = 0;
while (index < hashes.length) {
  sumOfPrices = sumOfPrices + hashes[index].price;
  index++;
}
console.log(sumOfPrices);

var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var sumOfPrices = 0;
hashes.forEach(function (hash) {
  sumOfPrices = sumOfPrices + hash.price;
});
console.log(sumOfPrices);

var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var sumOfPrices = hashes.reduce(function (sum, hash) {
  return sum + hash.price;
}, 0);
console.log(sumOfPrices);

// Implement a function named factorial that has one parameter: an integer, n . It must return the value of n! (i.e., n factorial).
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

// factorial(4) calls factorial(3)
// factorial(3) calls factorial(2)
// factorial(2) calls factorail(1)
// factorial(1) meets base case and returns 1

// propogating back up
// factorial(2) returns its value of 2, 2 * factorial(1) = 2 * 1 = 2
// factorial(3) returns its value of 3, 3 * factorial(2) = 3 * 2 = 6
// factorial(4) returns its value of 4, 4 * factorial(3) = 4 * 6 = 24

