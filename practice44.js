// Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

function ages() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = [];
  let index = 0;

  while (index < hashes.length) {
    newArray.push(hashes[index].age);
    index++;
  }
  return newArray;
}

const result = ages();
console.log(result);

function ages2() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = [];

  hashes.forEach(function (hash) {
    newArray.push(hash.age);
  });
  return newArray;
}

const result2 = ages2();
console.log(result2);

function ages3() {
  let hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
  let newArray = hashes.map(function (hash) {
    return hash.age;
  });
  return newArray;
}

console.log(ages3());

// Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

function divideByTwo() {
  let numbers = [1, 2, 3];
  let newNumbers = [];
  let index = 0;

  while (index < numbers.length) {
    newNumbers.push(numbers[index] / 2);
    index++;
  }
  return newNumbers;
}

const answer = divideByTwo();
console.log(answer);

function divideByTwo2() {
  let numbers = [1, 2, 3];
  let newNumbers = [];

  numbers.forEach(function (number) {
    newNumbers.push(number / 2);
  });
  return newNumbers;
}

const answer2 = divideByTwo2();
console.log(answer2);

function divideByTwo3() {
  let numbers = [1, 2, 3];
  let newNumbers = numbers.map(function (number) {
    return number / 2;
  });
  return newNumbers;
}

const answer3 = divideByTwo3();
console.log(answer3);