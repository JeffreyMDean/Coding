// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function hashConverter(pairs) {
  let i = 0;
  let pairsObject = {};

  while (i < pairs.length) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]];
const result = hashConverter(inputPairs);
console.log(result);

function hashConverter2(pairs) {
  let pairsObject = {};

  pairs.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputPairs2 = [[1, 3], [8, 9], [2, 16]];
const result2 = hashConverter2(inputPairs2);
console.log(result2);

// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

function printer(number) {
  if (number === 10) {
    return 0;
  } else {
    return -1;
  }
}

const inputNumber = 10;
const result3 = printer(inputNumber);
console.log(result3);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

function names(people) {
  let newArray = people.map(function (person) {
    return person.name;
  });

  return newArray;
}

const inputPeople = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
const result4 = names(inputPeople);
console.log(result4);