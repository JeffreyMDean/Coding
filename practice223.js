// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

function converter(numbers) {
  let flattenedArray = [];
  let index1 = 0;

  while (index1 < numbers.length) {
    let numberPair = numbers[index1];
    let index2 = 0;
    while (index2 < numberPair.length) {
      let number = numberPair[index2];
      flattenedArray.push(number);
      index2++;
    }
    index1++;
  }

  return flattenedArray;
}

const inputNumbers = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputNumbers);
console.log(result);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

function stringCombiner(strings1, strings2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < strings1.length) {
    let letter1 = strings1[index1];
    let index2 = 0;
    while (index2 < strings2.length) {
      let letter2 = strings2[index2];
      newArray.push(letter1 + letter2);
      index2++;
    }
    index1++;
  }

  return newArray;
}

const inputStrings1 = ["a", "b", "c"];
const inputStrings2 = ["d", "e", "f", "g"];
const result2 = stringCombiner(inputStrings1, inputStrings2);
console.log(result2);

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(20, 80);
console.log(rectangle);
console.log(rectangle.area());
