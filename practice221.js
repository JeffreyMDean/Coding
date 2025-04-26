// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    // let key = array[i][0];
    // let value = array[i][1];
    // hash[key] = value;
    const [key, value] = array[i];
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

function converter2(array) {
  let hash = {};

  return array.reduce((hash, pair) => {
    const [key, value] = pair;
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter2(inputArray2);
console.log(result2);

function converter3(array) {
  let hash = {};

  for (const [key, value] of array) {
    hash[key] = value;
  }

  return hash;
}

const inputArray4 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = converter3(inputArray4);
console.log(result2);
