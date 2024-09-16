// Write a program that uses a variable to store a word, then prints that word in reverse order.

function reverseOrder(word) {
  return word.split("").reverse().join("");
}

const word = "sun";
console.log(reverseOrder(word));

// Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

function wordCapped(word1, word2) {
  return word1.toUpperCase() + word2.toUpperCase();
}

const word1 = "laptop";
const word2 = "ocean";
console.log(wordCapped(word1, word2));

// Write a program that uses a variable to store a word, then prints the number of letters in the word.

function letterCounter(word) {
  return bird.length;
}

const bird = "parrot";
console.log(letterCounter(word));

// Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

function numberAsInteger(number) {
  return parseInt(number);
}

const number = 99.99;
console.log(numberAsInteger(number));
// after 99.99 is converted to the string "99.99", it stops parsing when it encounters a character that is not a valid part of an integer (in this case the period), so the function returns the integer part of the string before the period which is "99" which is then converted to the number 99

// Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

function numbersMultiplied(num1, num2) {
  return num1 * num2;
}

const num1 = 2;
const num2 = 4;
console.log(numbersMultiplied(num1, num2));

// Write a program that uses a variable to store a word, then prints the word with all lowercase letters.
function lowercaseLetters(animal) {
  return animal.toLowerCase();
}
const animal = "Penguin";
console.log(lowercaseLetters(animal));
            // effectively becomes lowecaseLetters("Penguin" when called)