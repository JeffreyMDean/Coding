// Write a program that uses a variable to store a number, then prints that number plus 10.

function numberPlusTen(value) {
  let sum = value + 10;
  return sum;
}

const inputNumber = 10;
const result = numberPlusTen(inputNumber);
console.log(result);


function numberPlusTen2(value) {
  return value + 10;
}

const inputNumber2 = 10;
const result2 = numberPlusTen(inputNumber);
console.log(result2);

// Write a program that uses a variable to store a word, then prints that word with all capital letters.

function capitalPrinter(word) {
  return word.toUpperCase();
}

const inputWord = "light";
const result3 = capitalPrinter(inputWord);
console.log(result3);

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(wordsArray, word1, word2) {
  wordsArray.push(word1, word2);
  return wordsArray;
}

const inputArray = ["blue", "green", "orange"];
const result4 = wordAdder(inputArray, "teal", "aqua");
console.log(result4);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(lettersArray) {
  lettersArray[1] = 3;
  return lettersArray;
}

const inputArray2 = ["w", "m", "j", "s"];
const result5 = letterChanger(inputArray2);
console.log(result5);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;
  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray3 = [2, 4, 5, 3, 1];
const result6 = numberPrinter(inputArray3);
console.log(result6);

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum];
  array.push(num1, num2, num3);
  return array;
}

const result7 = numberAdder(2, 4, 1, 7);
console.log(result7);


