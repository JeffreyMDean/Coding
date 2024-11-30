// Write a program that uses a variable to store a number, then prints the number times 10.

function numberTimesTen(number) {
  return number * 10;
}

const inputNumber = 10;
const result = numberTimesTen(inputNumber);
console.log(result);

// Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

function capitalLetters(word1, word2) {
  return word1.toUpperCase() + " " + word2.toUpperCase();
}

const inputword1 = "laugh";
const inputword2 = "desk";
const result2 = capitalLetters(inputword1, inputword2);
console.log(result2);

// Write a program that uses a variable to store a word, then prints the number of letters in the word.

function numberOfLetters(word) {
  return word.length;
}

const inputword3 = "basket";
const result3 = numberOfLetters(inputword3);
console.log(result3);

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

function stringAdder(stringsArray, string) {
  stringsArray.push(string);
  return stringsArray;
}

const inputArray = ["lake", "river"];
const result4 = stringAdder(inputArray, "forest");
console.log(result4);

// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

function multiplier(numbersArray) {
  numbersArray[0] = numbersArray[0] * 10;
  return numbersArray;
}

const inputArray2 = [3, 9, 7, 4, 1];
const result5 = multiplier(inputArray2);
console.log(result5);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;

  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray3 = [2, 4];
const result6 = numberPrinter(inputArray3);
console.log(result6);

// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

function countries(countriesArray, country) {
  countriesArray.push(country);
  return countriesArray;
}

const inputArray4 = ["New Zealand", "Iceland", "Greenland"];
const result7 = countries(inputArray4, "Netherlands");
console.log(result7);
