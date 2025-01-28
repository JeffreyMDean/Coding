// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

function converter(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    if (hash[strings[i]] === undefined) {
      hash[strings[i]] = 0;
    }
    hash[strings[i]]++;
  }

  return hash;
}

const inputStrings = ["do", "or", "do", "not"];
const result = converter(inputStrings);
console.log(result);

function converter2(strings) {
  let hash = {};

  for (let string of strings) {
    if (hash[string] === undefined) {
      hash[string] = 0;
    }
    hash[string]++;
  }

  return hash;
}

const inputStrings2 = ["do", "or", "do", "not"];
const result2 = converter2(inputStrings2);
console.log(result2);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter3(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result3 = converter3(inputHash);
console.log(result3);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter4(array) {
  return array.reduce((hash, pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = converter4(inputArray);
console.log(result4);

function converter5(array) {
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
const result5 = converter5(inputArray2);
console.log(result5);
