// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

function numberPrinter(number) {
  if (number < 10) {
    return -1;
  } else if (number > 10) {
    return 1;
  } else {
    return 0;
  }
}

const inputNumber = 7;
const result = numberPrinter(inputNumber);
console.log(result);

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(words, word1, word2) {
  words.push(word1, word2);
  return words;
}

const inputWords = ["Dog", "Cat", "Ferret"];
const result2 = wordAdder(inputWords, "turtle", "fish");
console.log(result2);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function changer(letters) {
  letters[1] = 5;
  return letters;
}

const inputLetters = ["a", "b", "c", "d"];
const result3 = changer(inputLetters);
console.log(result3);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter2(numbers) {
  let i = 0;

  while (i < numbers.length) {
    let number = numbers[i];
    console.log(number);
    i++;
  }
}

const inputNumbers = [1, 3, 5, 2, 8];
numberPrinter2(inputNumbers);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function capChanger(strings) {
  strings[2] = strings[2].toUpperCase();
  return strings;
}

const inputStrings = ["laptop", "computer", "tv"];
const result4 = capChanger(inputStrings);
console.log(result4);

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function attributePrinter(person) {
  console.log(person["firstName"]);
  console.log(person["lastName"]);
  console.log(person["email"]);
}

const inputPerson = {
  firstName: "Jake",
  lastName: "Wilson",
  email: "jake@eamil.com",
};
const result5 = attributePrinter(inputPerson);
console.log(result5);
