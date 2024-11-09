// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function combinedString(array) {
  let singleString = "";
  let i = 0;

  while (i < array.length) {
    singleString = singleString + array[i];
    i++;
  }
  return singleString;
}

const inputArray = ["volleyball", "basketball", "badminton"];
console.log(combinedString(inputArray));

function combinedString2(array) {
  let singleString = "";

  for (let i = 0; i < array.length; i++) {
    singleString = singleString + array[i];
  }
  return singleString;
}

const inputArray2 = ["volleyball", "basketball", "badminton"];
console.log(combinedString(inputArray2));

function combinedString3(array) {
  let singleString = array.reduce(function (single, string) {
    return single + string;
  }, "");
  return singleString;
}

const inputArray3 = ["volleyball", "basketball", "badminton"];
console.log(combinedString3(inputArray3));

// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

function addUpToTen(array) {
  let index1 = 0;

  while (index1 < array.length) {
    let index2 = 0;
    while (index2 < array.length) {
      if (index1 !== index2) {
        let sum = array[index1] + array[index2];
        if (sum === 10) {
          return [array[index1], array[index2]];
        }
      }
      index2++;
    }
    index1++;
  }
  return false;
}

const inputArray4 = [2, 5, 3, 1, 0, 7, 11];
console.log(addUpToTen(inputArray4));