// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

function addUpToTen(array) {
  let index1 = 0;

  while (index1 < array.length) {
    let index2 = 0;
    while (index2 < array.length) {
      if (index1 !== index2) {
        if (array[index1] + array[index2] === 10) {
          return [array[index1], array[index2]];
        }
      }
      index2++;
    }
    index1++;
  }
  return false;
}

const inputArray = [2, 5, 3, 1, 0, 7, 11];
console.log(addUpToTen(inputArray));
