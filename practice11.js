// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.
var numbers = [5, 10, 8, 3];
var maximumNumber = numbers[0];
var index = 0;
while (index < numbers.length) {
  if (numbers[index] > maximumNumber) {
    maximumNumber = numbers[index];
  }
  index++;
}
console.log(maximumNumber);

var numbers = [5, 10, 8, 3];
var maximumNumber = numbers[0];
numbers.forEach(function (number) {
  if (number > maximumNumber) {
    maximumNumber = number;
  }
});
console.log(maximumNumber);

var numbers = [5, 10, 8, 3];
var maximumNumber = numbers.reduce(function (max, number) {
  if (number > max) {
    return number;
  } else {
    return max;
  }
}, numbers[0]);
console.log(maximumNumber);

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var shortestName = hashes[0];
var index = 0;
while (index < hashes.length) {
  if (hashes[index].name.length < shortestName.name.length) {
    shortestName = hashes[index];
  }
  index++;
}
console.log(shortestName);

var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var shortestName = hashes[0];
hashes.forEach(function (hash) {
  if (hash.name.length < shortestName.name.length) {
    shortestName = hash;
  }
});
console.log(shortestName);

var hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var shortestName = hashes.reduce(function (short, hash) {
  if (hash.name.length < short.name.length) {
    return hash;
  } else {
    return short;
  }
}, hashes[0]);
console.log(shortestName);