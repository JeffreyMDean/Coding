// Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

function fineCalculator() {
  let bookType = prompt("Enter the type of book (regular, reference, or special collection");
  let daysOverdue = parseInt(prompt("Enter the number of days overdue"), 10);
  let fineAmount = 0;

  if (bookType === "regular") {
    if (daysOverdue <= 7) {
      fineAmount = daysOverdue * 1;
    } else {
      fineAmount = (7 * 1) + ((daysOverdue - 7) * 2)
    }
  } else if (bookType === "reference") {
    fineAmount = 0;
  } else if (bookType === "special collection") {
    fineAmount = daysOverdue * 5;
  } else {
    console.log("Invalid entry for type of book");
    return;
  }
  return fineAmount;
}

const fineAmount = fineCalculator();
if (fineAmount !== undefined) {
  console.log(`Your fine amount is $${fineAmount}.00.`);
}

