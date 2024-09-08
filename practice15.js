// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.
var numbers = [5, 10, 8, 3, 9];
var minimumNumber = numbers[0];
var index = 0;
while (index < numbers.length) {
  if (numbers[index] < minimumNumber) {
    minimumNumber = numbers[index];
  }
  index++;
}
console.log(minimumNumber);

var numbers = [5, 10, 8, 3, 9];
var minimumNumber = numbers[0];
numbers.forEach(function (number) {
  if (number < minimumNumber) {
    minimumNumber = number;
  }
});
console.log(minimumNumber);

var numbers = [5, 10, 8, 3, 9];
var minimumNumber = numbers.reduce(function (min, number) {
  if (number < min) {
    return number;
  } else {
    return min;
  }
}, numbers[0]);
console.log(minimumNumber);

// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
var numberPairs = [[1, 3], [8, 9], [2, 16]];
var flattenedArray = [];
var index1 = 0;
while (index1 < numberPairs.length) {
  var numberPair = numberPairs[index1];
  var index2 = 0;
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    flattenedArray.push(number);
    index2++;
  }
  index1++;
}
console.log(flattenedArray);