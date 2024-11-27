// Write a program that uses variables to store two numbers, then prints the numbers added together.

function numbersAdder(num1, num2) {
  return num1 + num2;
}

const inputnumber1 = 2;
const inputnumber2 = 4;
const result = numbersAdder(inputnumber1, inputnumber2);
console.log(result);

// Write a program that uses a variable to store a word, then prints that word in reverse order.

function wordReverser(word) {
  return word.split("").reverse().join("");
}

const inputWord = "code";
const result2 = wordReverser(inputWord);
console.log(result2);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function caseChanger(stringsArray) {
  stringsArray[2] = stringsArray[2].toUpperCase();
  return stringsArray;
}

const inputArray = ["red", "blue", "purple"];
const result3 = caseChanger(inputArray);
console.log(result3);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

function namePrinter(namesArray) {
  let i = 0;
  while (i < namesArray.length) {
    console.log(namesArray[i]);
    i++;
  }
  return null;
}

const inputArray2 = ["Randall", "Emily", "Nicole"];
const result4 = namePrinter(inputArray2);
console.log(result4);

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

function stringAdder(stringsArray, word1) {
  stringsArray.push(word1);
  return stringsArray;
}

const inputArray3 = ["dog", "cat"];
const result5 = stringAdder(inputArray3, "turtle");
console.log(result5);