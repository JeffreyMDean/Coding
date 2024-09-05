// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
var strings = ["volleyball", "basketball", "badminton"];
var singleString = "";
var index = 0;
while (index < strings.length) {
  singleString = singleString + strings[index] + "-";
  index++;
}
console.log(singleString);

var strings = ["volleyball", "basketball", "badminton"];
var singleString = "";
strings.forEach(function (string) {
  singleString = singleString + string + "-";
});
console.log(singleString);

var strings = ["volleyball", "basketball", "badminton"];
var singleString = strings.reduce(function (single, string) {
  return single + string + "-";
}, "");
console.log(singleString);

// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.
var numbers = [5, 10, 8, 3];
var product = 1;
var index = 0;
while (index < numbers.length) {
  product = product * numbers[index];
  index++;
}
console.log(product);

var numbers = [5, 10, 8, 3];
var product = 1;
numbers.forEach(function (number) {
  product = product * number;
});
console.log(product);

var numbers = [5, 10, 8, 3];
var product = numbers.reduce(function (product, number) {
  return product * number;
}, 1);
console.log(product);


