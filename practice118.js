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
const result = letterFrequency(inputString);
console.log(result);

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
const result2 = letterFrequency2(inputString2);
console.log(result2);

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
const result3 = letterFrequency3(inputString3);
console.log(result3);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result4 = converter(inputItems);
console.log(result4);
