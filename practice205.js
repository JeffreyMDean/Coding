// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

function converter(numberPairs) {
  let flattenedArray = [];
  let index1 = 0;

  while (index1 < numberPairs.length) {
    let numberPair = numberPairs[index1];
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

const inputNumberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputNumberPairs);
console.log(result);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

function stringCombiner(string1, string2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < string1.length) {
    let index2 = 0;
    while (index2 < string2.length) {
      newArray.push(string1[index1] + string2[index2]);
      index2++;
    }
    index1++;
  }
  return newArray;
}

const inputString1 = ["a", "b", "c"];
const inputString2 = ["d", "e", "f", "g"];
const result2 = stringCombiner(inputString1, inputString2);
console.log(result2);

// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

function combinations(string) {
  let newArray = [];
  let index1 = 0;

  while (index1 < string.length) {
    let index2 = 0;
    while (index2 < string.length) {
      if (index1 !== index2) {
        newArray.push(string[index1] + string[index2]);
      }
      index2++;
    }
    index1++;
  }
  return newArray;
}

const inputString = ["a", "b", "c", "d"];
const result3 = combinations(inputString);
console.log(result3);
