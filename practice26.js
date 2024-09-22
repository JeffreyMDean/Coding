// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

function bookInfo(title, author) {
  return "I enjoyed the book " + title + " by " + author + ".";
}

const title = "Boundless";
const author = "Ben Greenfield";
console.log(bookInfo(title, author));

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

function bookInformation(title1, author1) {
  return `I enjoyed the book ${title1} by ${author1}.`;
}

const title1 = "Your Mind on Plants";
const author1 = "Michael Pollen";
console.log(bookInformation(title1, author1));

// Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

function game() {
  let input = window.prompt("Enter a password: ");
  if (input === "Joshua") {
    return "Shall we play a game?";
  } else {
    return "Access denied";
  }
}

let result = game();
console.log(result);

