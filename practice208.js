// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

function addToTen(numbers) {
  let index1 = 0;
  let result = false;

  while (index1 < numbers.length) {
    let num = numbers[index1];
    let index2 = 0;
    while (index2 < numbers.length) {
      if (index1 !== index2) {
        let otherNum = numbers[index2];
        if (num + otherNum === 10 && result === false) {
          result = [num, otherNum];
        }
      }
      index2++;
    }
    index1++;
  }

  return result;
}

const inputNumbers = [2, 5, 3, 1, 0, 7, 11];
const result = addToTen(inputNumbers);
console.log(result);

// Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

function converter(pairs) {
  let index1 = 0;
  let singleString = "";

  while (index1 < pairs.length) {
    let pair = pairs[index1];
    let index2 = 0;
    while (index2 < pair.length) {
      let string = pair[index2];
      singleString = singleString + string;
      index2++;
    }
    index1++;
  }

  return singleString;
}

const stringPairs = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
const result2 = converter(stringPairs);
console.log(result2);
