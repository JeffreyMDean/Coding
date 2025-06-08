// Write a program that uses a variable to store a word, then prints that word in reverse order.

function reverse(word) {
  return word.split("").reverse().join("");
}

const inputWord = "hello world";
const result = reverse(inputWord);
console.log(result);

// Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

function convertToInteger(number) {
  return parseInt(number);
}

const inputNumber = 7.77;
const result2 = convertToInteger(inputNumber);
console.log(result2);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do": 2, "or": 1, "not": 1}.

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
const result3 = converter(inputStrings);
console.log(result3);
