// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(array) {
  let i = 0;
  let newHash = {};

  while (i < array.length) {
    let key = array[i].id;
    let value = array[i];
    newHash[key] = value;
    i++;
  }

  return newHash;
}

const inputArray = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result = hashConverter(inputArray);
console.log(result);

function hashConverter2(array) {
  let newHash = {};

  array.forEach(item => {
    let key = item.id;
    let value = item;
    newHash[key] = value;
  });

  return newHash;
}

const inputArray2 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result2 = hashConverter(inputArray2);
console.log(result2);

function hashConverter3(array) {
  return array.reduce((newHash, item) => {
    newHash[item.id] = item;
    return newHash;
  }, {});
}

const inputArray3 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result3 = hashConverter(inputArray3);
console.log(result3);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(pairs) {
  let i = 0;
  let pairsObject = {};

  while (i < pairs.length) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]];
const result4 = converter(inputPairs);
console.log(result4);

function converter2(pairs) {
  let pairsObject = {};

  pairs.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}


const inputPairs2 = [[1, 3], [8, 9], [2, 16]];
const result5 = converter(inputPairs2);
console.log(result5);

function converter3(pairs) {
  return pairs.reduce((hash, pair) => {
    hash[pair][0] = pair[1];
    return hash;
  }, {});
}

const inputPairs3 = [[1, 3], [8, 9], [2, 16]];
const result6 = converter(inputPairs3);
console.log(result6);


