// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

function shortWords(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length < 4) {
      newArray.push(strings[i]);
    }
  }

  return newArray;
}

const inputStrings = ["a", "man", "a", "plan", "a", "canal", "panama"];
const result = shortWords(inputStrings);
console.log(result);

function shortWords2(strings) {
  return strings.filter((string) => {
    if (string.length < 4) {
      return string;
    }
  });
}

const inputStrings2 = ["a", "man", "a", "plan", "a", "canal", "panama"];
const result2 = shortWords2(inputStrings2);
console.log(result2);

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(words, word1, word2) {
  words.push(word1, word2);
  return words;
}

const inputWords = ["red", "black", "silver"];
const result3 = wordAdder(inputWords, "teal", "yellow");
console.log(result3);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = 3;
  return letters;
}

const inputLetters = ["r", "b", "w", "q"];
const result4 = letterChanger(inputLetters);
console.log(result4);

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function info(details) {
  console.log(details["firstName"]);
  console.log(details["lastName"]);
  console.log(details["email"]);
}

const inputDetails = {
  firstName: "Owen",
  lastName: "Williams",
  email: "owen@email.com",
};
info(inputDetails);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function converter(string) {
  let hash = {};

  for (let letter of string) {
    if (hash[letter] === undefined) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }

  return hash;
}

const inputString = "bookkeeper";
const result6 = converter(inputString);
console.log(result6);
