// Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

function cities(city1, city2, city3) {
  return city1 + ", " + city2 + ", and " + city3 + " are three cities in Ohio.";
}         // variable names that hodl string values
          // only need to start with quotes when you are defining string literals directly. Ex, "Cleveland" is a string literal, while city1 is a reference to a variable.
          
const city1 = "Cleveland";
const city2 = "Columbus";
const city3 = "Toledo";
console.log(cities(city1, city2, city3));

// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

function numberPrinter(number) {
  if (number === 10) {
    return 0;
  } else {
    return -1;
  }
}

const number = 5;
console.log(numberPrinter(number));

// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.


function numberTester(number1) {
  if (number1 < 10) {
    return -1;
  } else if (number1 > 10) {
    return 1;
  } else {
    return 0;
  }
}

const number1 = 10;
console.log(numberTester(number1));

// Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

function numbersLessThanTen(number2, number3) {
  if (number2 < 10 && number3 < 10) {
    return 1;
  } else {
    return 0;
  }
}

const number2 = 7;
const number3 = 8;
console.log(numbersLessThanTen(number2, number3));