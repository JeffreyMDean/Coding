// Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

function firstLetter() {
  let strings = ["hello", "goodbye"];
  let newArray = [];
  let index = 0;

  while (index < strings.length) {
    newArray.push(strings[index][0]);
    index++;
  }
  return newArray;
}

const result = firstLetter();
console.log(result);

function firstLetter2() {
  let strings = ["hello", "goodbye"];
  let newArray = [];

  strings.forEach(function (string) {
    newArray.push(string[0]);
  });
  return newArray;
}

console.log(firstLetter2());

function firstLetter3() {
  let strings = ["hello", "goodbye"];
  let newArray = strings.map(function (string) {
    return string[0];
  });
  return newArray;
}

console.log(firstLetter3());

// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

function age() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = [];
  let index = 0;

  while (index < hashes.length) {
    newArray.push(hashes[index].age * 2);
    index++;
  }
  return newArray;
}

console.log(age());

function age2() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = [];

  hashes.forEach(function (hash) {
    newArray.push(hash.age * 2);
  });
  return newArray;
}

console.log(age2());

function age3() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = hashes.map(function (hash) {
    return hash.age * 2;
  });
  return newArray;
}

console.log(age3());

