// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function hashConverter(array) {
  let hash = {};
  let i = 0;

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = hashConverter(inputArray);
console.log(result);

function hashConverter2(array) {
  let hash = {};

  array.forEach((pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
  }, {});

  return hash;
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = hashConverter2(inputArray2);
console.log(result2);

function hashConverter3(array) {
  let hash = {};

  array.forEach((pair) => {
    const [key, value] = pair;
    hash[key] = value;
  }, {});

  return hash;
}

const inputArray3 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = hashConverter3(inputArray3);
console.log(result3);

function hashConverter4(array) {
  return array.reduce((hash, pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
    return hash;
  }, {});
}

const inputArray4 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = hashConverter4(inputArray4);
console.log(result4);

function hashConverter5(array) {
  return array.reduce((hash, pair) => {
    hash[pair[0]] = pair[1];
    return hash;
  }, {});
}

const inputArray5 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result5 = hashConverter5(inputArray5);
console.log(result5);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterFrequency(string) {
  let hash = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    i++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result6 = letterFrequency(inputString);
console.log(result6);

function letterFrequency2(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString2 = "bookkeeper";
const result7 = letterFrequency2(inputString2);
console.log(result7);

function letterFrequency3(string) {
  return string.split("").reduce((hash, letter) => {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
    return hash;
  }, {});
}

const inputString3 = "bookkeeper";
const result8 = letterFrequency3(inputString3);
console.log(result8);
