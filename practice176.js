// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputArray);
console.log(result);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter2(hash) {
  let array = [];

  Object.entries(hash).forEach(([key, value]) => {
    array.push(key, value);
  });

  return array;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash);
console.log(result2);

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(40, 50);
console.log(rectangle);
