// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function storeWords(wordsArray, word1, word2) {
  wordsArray.push(word1, word2);
  return wordsArray;
}

const inputArray = ["tv", "computer", "monitor"];
console.log(storeWords(inputArray, "coffee", "tea"));

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function modifyLetters(lettersArray) {
  lettersArray[1] = 9;
  return lettersArray;
}

const inputArray2 = ["a", "b", "c", "d"];
const modifiedLetters = modifyLetters(inputArray2);
console.log(modifiedLetters.join(" "));




