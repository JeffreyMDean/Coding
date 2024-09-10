// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function test(input) {

  let result = [];
  let index = 0;
  while (index < input.length) {
    result.push(input[index]);
    index++;
  }
  return result;
}

const input = ["volleyball", "basketball", "badminton"];
console.log(test(input));
    //everything after SELECT is column name   //everyhting after FROM is model name (plural)
SELECT * FROM exercises 
WHILE name = 


function test2(input) {
  let emptyString = "";
  emptyString.forEach(function (string) {
  emptyString = emptyString + string;
  });
  return emptyString;
}
console.log(test2(input));



// var strings = ["volleyball", "basketball", "badminton"];
// var singleString = strings.reduce(function (single, string) {
//   return single + string;
// }, "");
// console.log(singleString);

