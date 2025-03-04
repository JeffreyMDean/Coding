// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = 3;
  return letters;
}

const inputLetters = ["b", "r", "z", "l"];
const result = letterChanger(inputLetters);
console.log(result);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbers) {
  let i = 0;

  while (i < numbers.length) {
    let number = numbers[i];
    console.log(number);
    i++;
  }
}

const inputNumbers = [2, 3, 8, 4, 9];
numberPrinter(inputNumbers);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  let flatArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flatArray.push(key, value);
  });

  return flatArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter(inputHash);
console.log(result2);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter2(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result3 = converter2(inputPeople);
console.log(result3);

// Write a Point class with attributes for x, y, and z coordinates.

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const point = new Point(3, 100, 52.5);
console.log(point);
