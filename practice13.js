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