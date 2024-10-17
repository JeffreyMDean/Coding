// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

function letterW() {
  let strings = ["winner", "winner", "chicken", "dinner"];
  let newArray = [];
  let index = 0;

  while (index < strings.length) {
    if (strings[index][0] === "w") {
      newArray.push(strings[index]);
    }
    index++;
  }
  return newArray;
}

const result = letterW();
console.log(result);

function letterW2() {
  let strings = ["winner", "winner", "chicken", "dinner"];
  let newArray = [];

  strings.forEach(function (string) {
    if (string[0] === "w") {
      newArray.push(string);
    }
  });
  return newArray;
}

console.log(letterW2());

function letterW3() {
  let strings = ["winner", "winner", "chicken", "dinner"];
  let newArray = strings.filter(function (string) {
    return string[0] === "w";
  });
  return newArray;
}

console.log(letterW3());