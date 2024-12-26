// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

function combineStrings(strings) {
  return strings.reduce((single, string) => {
    return single + string + "-";
  }, "-");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = combineStrings(inputStrings);
console.log(result);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  array.forEach((pair) => {
    let key = pair[0];
    let value = pair[1];
    hash[key] = value;
  });

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter(inputArray);
console.log(result2);
