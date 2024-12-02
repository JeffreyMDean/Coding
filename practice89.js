// Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

function lowerCaseLetters(word) {
  return word.toLowerCase();
}

const inputWord = "Hello";
const result = lowerCaseLetters(inputWord);
console.log(result);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

function namePrinter(firstName, lastName) {
  return firstName + " " + lastName;
}

const inputName = "John";
const inputName2 = "Wilson";
const result2 = namePrinter(inputName, inputName2);
console.log(result2);

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function attributePrinter(person) {
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.email);
}

const inputPerson = { firstName: "Joe", lastName: "Smith", email: "joe@email.com" };
const result3 = attributePrinter(inputPerson);
console.log(result3);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

function personalInfo(people) {
  return people[0];
}

const inputPeople = [{ firstName: "Joe", lastName: "Smith" }, { firstName: "Will", lastName: "Miller" }, { firstName: "Joan", lastName: "Smith" }];
const result4 = personalInfo(inputPeople);
console.log(result4);






