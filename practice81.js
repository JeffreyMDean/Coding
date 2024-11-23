// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordPrinter(wordsArray, word1, word2) {
  wordsArray.push(word1, word2);
  return wordsArray;
}

const inputArray = ["dog", "cat", "ferret"];
console.log(wordPrinter(inputArray, "bug", "bat"));

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function elementChanger(lettersArray) {
  lettersArray[1] = 2;
  return lettersArray;
}

const inputArray2 = ["x", "i", "m", "b"];
const result = elementChanger(inputArray2);
console.log(result);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;

  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray3 = [1, 2, 5, 7, 3];
console.log(numberPrinter(inputArray3));

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum]; //self contained and does not rely on any external variables making the fx pure (i.e. works independently and doesn't have any side effects on external variables. The result depends on the fx arugemtns, and the array is created fresh each time I call the fx)
  array.push(num1, num2, num3);
  return array;
}   

const result2 = numberAdder(5, 3, 2, 4);
console.log(result2);

function numberAdder2(arr, num1, num2, num3) {
  arr.push(num1, num2, num3);
  return arr;
}   

const arr = [5];
const result3 = numberAdder2(arr, 3, 2, 4);
console.log(result3);

// this one can be a problem if used elsewhere in the code after it has been modified by the function. So, if the fx changes the array, changes will affect the array outside the function as well which could then lead to bugs






