// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

function arrayConverter(array) {
  let flattenedArray = [];
  let index1 = 0;

  while (index1 < array.length) {
    let numberPair = array[index1];
    let index2 = 0;
    while (index2 < numberPair.length) {
      let number = numberPair[index2];
      flattenedArray.push(number);
      index2 += 1;
    }
    index1 += 1;
  }
  return flattenedArray;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
console.log(arrayConverter(inputArray));