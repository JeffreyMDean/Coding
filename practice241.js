// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function printer(person) {
  console.log(person.name);
  console.log(person.lastName);
  console.log(person.email);
}

const inputPerson = { name: "Joe", lastName: "Smith", email: "joe@email.com" };
const result = printer(inputPerson);
console.log(result);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbers) {
  let i = 0;

  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

const inputNumbers = [2, 1, 4, 9, 10];
const result2 = numberPrinter(inputNumbers);
console.log(result2);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function caseChanger(strings) {
  strings[2] = strings[2].toUpperCase();
  return strings;
}

const inputStrings = ["tree", "forest", "lake"];
const result3 = caseChanger(inputStrings);
console.log(result3);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

function stringConcatenation(first, last) {
  return first + " " + last;
}

const firstName = "Ruth";
const lastName = "Smith";
const result4 = stringConcatenation(firstName, lastName);
console.log(result4);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

function stringInterpolation(first, last) {
  return `${first} ${last}`;
}

const firstName1 = "John";
const lastName1 = "Jefferson";
const result5 = stringInterpolation(firstName1, lastName1);
console.log(result5);
