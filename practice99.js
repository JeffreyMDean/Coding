// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let i = 0;
  let pairsObject = {};

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
const result = converter(inputArray);
console.log(result);

function converter2(pairs) {
  let pairsObject = {};

  pairs.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]];
const result2 = converter(inputPairs);
console.log(result2);
