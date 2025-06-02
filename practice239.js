// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

function caps(strings) {
  let newArray = [];
  let i = 0;

  while (i < strings.length) {
    newArray.push(strings[i].toUpperCase());
    i++;
  }

  return newArray;
}

const inputStrings = ["hello", "goodbye"];
const result = caps(inputStrings);
console.log(result);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

function names(people) {
  return people.map((person) => {
    return person.name;
  });
}

const inputPeople = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const result2 = names(inputPeople);
console.log(result2);

// Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

function firstLetterOnly(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    newArray.push(strings[i][0]);
  }

  return newArray;
}

const inputStrings2 = ["hello", "goodbye"];
const result3 = firstLetterOnly(inputStrings2);
console.log(result3);

function firstLetterOnly2(strings) {
  return strings.map((string) => {
    return string[0];
  });
}

const inputStrings3 = ["hello", "goodbye"];
const result4 = firstLetterOnly(inputStrings3);
console.log(result4);
