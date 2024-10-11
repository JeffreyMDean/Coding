// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

function lettersCapped() {
  let strings = ["hello", "goodbye"];
  let newStrings = [];
  let index = 0;

  while (index < strings.length) {
    newStrings.push(strings[index].toUpperCase());
    index++;
  }
  return newStrings;
}

const result = lettersCapped();
console.log(result);

function lettersCapped2() {
  let strings = ["hello", "goodbye"] ;
  let newStrings = [];
  strings.forEach(function (string) {
    newStrings.push(string.toUpperCase());
  });
  return newStrings;
}

const result2 = lettersCapped2();
console.log(result2);

function lettersCapped3() {
  let strings = ["hello", "goodbye"];
  let newStrings = strings.map(function (string) {
    return string.toUpperCase();
  });
  return newStrings;
}

const result3 = lettersCapped3();
console.log(result3);