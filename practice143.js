// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

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

const inputStrings = ["do", "or", "do", "not"];
const result2 = converter2(inputStrings);
console.log(result2);

function converter3(strings) {
  let hash = {};

  for (let i = 0; i < strings.length; i++) {
    if (hash[strings[i]] === undefined) {
      hash[strings[i]] = 0;
    }
    hash[strings[i]]++;
  }

  return hash;
}

const inputStrings2 = ["do", "or", "do", "not"];
const result3 = converter3(inputStrings2);
console.log(result3);

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter4(hash) {
  let flattenedArray = [];

  Object.entries(hash).forEach(([key, value]) => {
    flattenedArray.push(key, value);
  });

  return flattenedArray;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result4 = converter4(inputHash);
console.log(result4);
