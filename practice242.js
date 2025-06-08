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
