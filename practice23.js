// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

function firstLastNames(firstName, lastName) {
  return firstName + " " + lastName;
}

const firstName = "Bob";
const lastName = "Smith";
console.log(firstLastNames(firstName, lastName));

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

function interpolation(firstName1, lastName1) {
  return `${firstName1} ${lastName1}`;
}

const firstName1 = "Bob";
const lastName1 = "Smith";
console.log(interpolation(firstName1, lastName1));

// Write a program that asks the user to input a word. If the word is "marco", print "polo".

function marcoPolo() {
  let input = window.prompt("Enter a word: ");
  if (input === "marco") {
    return "polo";
  }
  return null;
}

let result = marcoPolo();
if (result) {
  console.log(result);
} else {
  console.log("You're not marco.");
}