// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

function names() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newHashes = [];
  let index = 0;

  while (index < hashes.length) {
    newHashes.push(hashes[index].name);
    index++;
  }
  return newHashes;
}

const result = names();
console.log(result);

function names2() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newHashes = [];

  hashes.forEach(function (hash) {
    newHashes.push(hash.name);
  });
  return newHashes;
}

const result2 = names2();
console.log(result2);

function names3() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newHashes = hashes.map(function (hash) {
    return hash.name;
  });
  return newHashes;
}

console.log(names2());

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

function plusSeven() {
  let numbers = [1, 2, 3];
  let newNumbers = [];
  let index = 0;

  while (index < numbers.length) {
    newNumbers.push(numbers[index] + 7);
    index++;
  }
  return newNumbers;
}

const result4 = plusSeven();
console.log(result4);

function plusSeven2() {
  let numbers = [1, 2, 3];
  let newNumbers = [];

  numbers.forEach(function (hash) {
    newNumbers.push(hash + 7);
  });
  return newNumbers;
}

const result5 = plusSeven2();
console.log(result5);

function plusSeven3() {
  let numbers = [1, 2, 3];
  let newNumbers = numbers.map(function (number) {
    return number + 7;
  });
  return newNumbers;
}

const result6 = plusSeven3();
console.log(result6);

