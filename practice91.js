// Write a program that asks the user to input a word. If the word is "marco", print "polo".

function marcoPolo() {
  let word = window.prompt("Please enter a word: ").trim();
  if (word === null || word.trim() === "") {
    return "No input received";
  }

  if (word.trim() === "marco") {
    return "polo";
  } else {
    return "try again";
  }

  return null;
}

let result = marcoPolo();
console.log(result);

// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

function sumOfNumbers(numbersArray) {
  let sum = 0;
  let i = 0;

  while (i < numbersArray.length) {
    sum = sum + numbersArray[i];
    i++;
  }
  return sum;
}

const inputArray = [5, 10, 8, 3];
const result2 = sumOfNumbers(inputArray);
console.log(result2);

function sumOfNumbers2(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
  }
  return sum;
}

const inputArray2 = [5, 10, 8, 3];
const result3 = sumOfNumbers2(inputArray);
console.log(result3);

function sumOfNumbers3(numbersArray) {
  let sum = numbersArray.reduce(function (sum, number) {
    return sum + number;
  }, 0);
  return sum;
}

const inputArray3 = [5, 10, 8, 3];
const result4 = sumOfNumbers3(inputArray3);
console.log(result4);

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function personalInfo(person) {
  console.log(person["firstName"]);
  console.log(person["lastName"]);
  console.log(person["email"]);
}

const inputPerson = { firstName: "Joe", lastName: "Smith", email: "joe@email.com" };
const result5 = personalInfo(inputPerson);
console.log(result5);





