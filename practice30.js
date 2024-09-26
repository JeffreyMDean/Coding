// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

function movieTheater(age, movieTime) {
  let ticketPrice;

  if (age <= 12) {
    ticketPrice = 5;
  } else if (age >= 13 && age <= 59) {
    if (movieTime < 18) {
      ticketPrice = 7;
    } else {
      ticketPrice = 10;
    }
  } else if (age >= 60) {
    ticketPrice = 7;
  }
  return ticketPrice;
}

const age = 82;
const movieTime = 16;
const ticketPrice = movieTheater(age, movieTime);
console.log(`A movie at ${movieTime}:00 for an ${age}-year old is $${ticketPrice}.00`);

// Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

function fineCalculator() {
  let bookType = prompt("Enter the type of book (regular, reference, or special collection):").toLowerCase();
  let daysOverdue = parseInt(prompt("Enter the number of days overdue"), 10);
  let fineAmount = 0;

  if (bookType === "regular") {
    if (daysOverdue <= 7) {
      fineAmount = daysOverdue * 1;
    } else {
      fineAmount = (7 * 1) + ((daysOverdue - 7) * 2);
    }
  } else if (bookType === "reference") {
    fineAmount = 0;
  } else if (bookType === "special collection") {
    fineAmount = daysOverdue * 5;
  } else {
    console.log("Invalid entry for book type");
    return; // exit the function for invalid input
  }
  return fineAmount;
}

const fineAmount = fineCalculator();
if (fineAmount !== undefined) {
  console.log(`Your fine amount is $${fineAmount}.00`);
}