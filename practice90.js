// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).   

function namePrinter(firstName, lastName) {
  return firstName + " " + lastName;
}

const inputFirstName = "Joe";
const inputLastName = "Smith";
const result = namePrinter(inputFirstName, inputLastName);
console.log(result);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

function namePrinter2(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const inputFirstName2 = "John";
const inputLastName2 = "Smith";
const result2 = namePrinter2(inputFirstName2, inputLastName2);
console.log(result2);

// Write a while loop to print the numbers 1 through 10.

function numberPrinter() {
  let number = 1;
  const numbers = [];
  while (number <= 10) {
    numbers.push(number);
    number++;
  }
  return numbers;
}

const result3 = numberPrinter();
console.log(result3);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

function getFirstPersonInfo(people) {
  return people[0];
}

const inputPeople = [{ firstName: "Frank", lastName: "Smith"}, { firstName: "Lucy", lastName: "Smith" }, { firstName: "Kristen", lastName: "Smith" }];

const firstPerson = getFirstPersonInfo(inputPeople);
console.log(firstPerson);


