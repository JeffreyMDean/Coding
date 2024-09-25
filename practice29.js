// Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

function test(number) {
  if (number < 0) {
    return 1776;
  } else {
    return 1979;
  }
}

const number = 1;
console.log(test(number));

// Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

function test2(num) {
  if (num === 100) {
    return 100;
  } else if (num === 99) {
    return 99;
  } else {
    return 0;
  }
}

const num = 100;
console.log(test2(num));

// Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

function test3(num1, num2) {
  if (num1 < 0 && num2 > 0) {
    return 1;
  } else {
    return 0;
  }
}

const num1 = 5;
const num2 = 7;
console.log(test3(num1, num2));

// Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

function test4(number1) {
  if (number1 > 80) {
    return 5;
  } else if ( number1 > 60) {
    return 4;
  } else if (number1 > 40) {
    return 3;
  } else if (number1 > 20) {
    return 2;
  } else {
    return 1;
  }
}


const number1 = 84;
console.log(test4(number1));

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

const age = 34;
const movieTime = 19;
const ticketPrice = movieTheater(age, movieTime);
console.log(`The ticket price for a ${age}-year-old at ${movieTime}:00 is $${ticketPrice}`);