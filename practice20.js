// Write a program that uses a variable to store a number, then prints that number plus 10.

function addTen(number) {
  let sum = number + 10;
  console.log(sum);
}

const number = 10;
addTen(10);


// Write a program that uses a variable to store a word, then prints that word with all capital letters.

function wordCapitalized(word) {
  let wordCapped = word.toUpperCase();
  console.log(wordCapped);
}

const word = "car";
wordCapitalized(word);

// Write a program that uses variables to store two numbers, then prints the numbers added together.

function NumbersSum(numbers1, numbers2) {
  let sum = numbers1 + numbers2;
  console.log(sum);
}

const numbers1 = 3;
const numbers2 = 4;
NumbersSum(numbers1, numbers2);

// Write a program that uses a variable to store a word, then prints that word in reverse order.

function wordReversed(word2) {
  console.log(word2.split("").reverse().join(""));
}

const word2 = "train";
wordReversed(word2);


