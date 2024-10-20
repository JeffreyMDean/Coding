// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

function shortStrings() {
  let strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
  let newArray = [];
  let index = 0;

  while (index < strings.length) {
    if (strings[index].length < 4) {
      newArray.push(strings[index]);
    }
    index++;
  }
  return newArray;
}

const result = shortStrings();
console.log(result);

function shortStrings2() {
  let strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
  let newArray = [];

  strings.forEach(function (string) {
    if (string.length < 4) {
      newArray.push(string);
    }
  });
  return newArray;
} 

console.log(shortStrings2());

function shortStrings3() {
  let strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
  let newArray = strings.filter(function (string) {
    return string.length < 4;
  });
  return newArray;
}   

console.log(shortStrings3());

// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

function shortNames() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = [];
  let index = 0;

  while (index < hashes.length) {
    if (hashes[index].name.length < 6) {
      newArray.push(hashes[index]);
    }
    index++;
  }
  return newArray;
}

console.log(shortNames());

function shortNames2() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = [];

  hashes.forEach(function (hash) {
    if (hash.name.length < 6) {
      newArray.push(hash);
    }
  });
  return newArray;
}

console.log(shortNames2());

function shortNames3() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = hashes.filter(function (hash) {
    return hash.name.length < 6;
  });
  return newArray;
}

console.log(shortNames3());