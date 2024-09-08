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
  return single + string;
}, "");
console.log(singleString);