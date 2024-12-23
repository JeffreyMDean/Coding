// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

function wStrings(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "w") {
      newArray.push(strings[i]);
    }
  }

  return newArray;
}

const inputStrings = ["winner", "winner", "chicken", "dinner"];
const result = wStrings(inputStrings);
console.log(result);

function wStrings2(strings) {
  return strings.filter(function (string) {
    return string[0] === "w";
  });
}

const inputStrings2 = ["winner", "winner", "chicken", "dinner"];
const result2 = wStrings(inputStrings2);
console.log(result2);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function hashConverter(pairs) {
  let i = 0;
  let hash = {};

  while (i < pairs.length) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = hashConverter(inputPairs);
console.log(result3);

function hashConverter2(pairs) {
  let hash = {};

  pairs.forEach((pair) => {
    const [key, value] = pair;
    hash[key] = value;
  });

  return hash;
}

const inputPairs2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = hashConverter2(inputPairs2);
console.log(result4);

function hashConverter3(pairs) {
  return pairs.reduce((hash, pair) => {
    hash[pair][0] = pair[1];
    return pair;
  }, {});
}

const inputPairs3 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result5 = hashConverter2(inputPairs3);
console.log(result5);
