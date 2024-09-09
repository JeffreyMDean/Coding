// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
var strings = ["a", "b", "c", "d"];
var everyCombination = [];
var index1 = 0;
while (index1 < strings.length) {
  var index2 = 0;
  while (index2 < strings.length) {
    if (index1 !== index2) {
      everyCombination.push(strings[index1] + strings[index2]);
    }
    index2++;
  }
  index1++;
}
console.log(everyCombination);

// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
var numbers = [5, -2, 1, -9, -7, 2, 6];
var largestProduct = numbers[0] * numbers[1];
var index1 = 0;
while (index1 < numbers.length) {
  var currentNumber = numbers[index1];
  var index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var otherNumber = numbers[index2];
      var product = currentNumber * otherNumber;
      if (product > largestProduct) {
        largestProduct = product;
      }
    }
    index2++;
  }
  index1++;
}
console.log(largestProduct);

