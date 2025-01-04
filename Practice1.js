// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
var strings = ["volleyball", "basketball", "badminton"];
var singleString = "";
var index = 0;
while (index < strings.length) {
  singleString = singleString + strings[index];
  index++;
}
console.log(singleString);

var strings = ["volleyball", "basketball", "badminton"];
var singleString = "";
strings.forEach(function (string) {
  singleString = singleString + string;
});
console.log(singleString);

var strings = ["volleyball", "basketball", "badminton"];
var singleString = strings.reduce(function (single, string) {
  return (single = single + string);
}, "");
console.log(singleString);

// Implement a function named factorial that has one parameter: an integer, n. It must return the value of  (i.e.,  factorial).
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));
