// Create an array to store 3 words. Then add two more words to the array and print the array on one line.        

function storeWords(array, word1, word2) {
  array.push(word1, word2);
  return array;
}

const inputArray = ["yogurt", "chips", "chicken"];
console.log(storeWords(inputArray, "ham", "eggs"));

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function modifyLetters(lettersArray) {
  lettersArray[1] = 3;
  return lettersArray;
}

const inputArray2 = ["a", "b", "c", "d"];
const modifiedLetters = modifyLetters(inputArray2);
console.log(modifiedLetters.join(" "));

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;
  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray3 = [2, 9, 5, 8, 1];
console.log(numberPrinter(inputArray3));