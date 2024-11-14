// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function modifyLetters(lettersArray) {
  lettersArray[1] = 7;
  return lettersArray;
}

const initialLetters = ["a", "b", "c", "d"];
const modifiedLetters = modifyLetters(initialLetters);
console.log(modifiedLetters.join(" "));

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function storeWords(array, word1, word2) {
  array.push(word1, word2);
  return array;
}

const inputArray = ["ball", "basket", "bowl"];
console.log(storeWords(inputArray, "bear", "bread"));
