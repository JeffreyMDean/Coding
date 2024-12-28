// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function letterCounter(string) {
  let letterFrequency = {};
  let i = 0;

  while (i < string.length) {
    let letter = string[i];
    if (letterFrequency[letter] === undefined) {
      letterFrequency[letter] = 0;
    }
    letterFrequency[letter]++;
    i++;
  }

  return letterFrequency;
}

const inputString = "bookkeeper";
const result = letterCounter(inputString);
console.log(result);
